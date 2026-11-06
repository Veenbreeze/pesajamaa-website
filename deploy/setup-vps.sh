#!/usr/bin/env bash
#
# One-time provisioning for a Contabo VPS running Ubuntu/Debian.
# Run as root:   sudo DOMAIN=pesajamaa.co.tz DEPLOY_PUBKEY="ssh-ed25519 AAAA..." bash deploy/setup-vps.sh
#
# Environment overrides:
#   DOMAIN             primary domain (default: pesajamaa.co.tz)
#   WEB_ROOT           nginx document root (default: /var/www/pesajamaa)
#   DEPLOY_USER        Linux user GitHub Actions will SSH as (default: deploy)
#   LETSENCRYPT_EMAIL  email for certbot (default: admin@pesajamaa.co.tz)
#   DEPLOY_PUBKEY      public key to authorise for DEPLOY_USER (recommended)
#   SKIP_SSL=1         skip certbot (e.g. DNS not pointed yet)

set -euo pipefail

if [ "$(id -u)" -ne 0 ]; then
  echo "ERROR: run this script as root (sudo)." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

DOMAIN="${DOMAIN:-pesajamaa.co.tz}"
WWW_DOMAIN="www.${DOMAIN}"
WEB_ROOT="${WEB_ROOT:-/var/www/pesajamaa}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
LETSENCRYPT_EMAIL="${LETSENCRYPT_EMAIL:-admin@pesajamaa.co.tz}"

echo "==> Installing packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx rsync certbot python3-certbot-nginx ufw

echo "==> Creating deploy user: ${DEPLOY_USER}"
if ! id -u "${DEPLOY_USER}" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "${DEPLOY_USER}"
fi

if [ -n "${DEPLOY_PUBKEY:-}" ]; then
  install -d -m 700 -o "${DEPLOY_USER}" -g "${DEPLOY_USER}" "/home/${DEPLOY_USER}/.ssh"
  printf '%s\n' "${DEPLOY_PUBKEY}" > "/home/${DEPLOY_USER}/.ssh/authorized_keys"
  chown "${DEPLOY_USER}:${DEPLOY_USER}" "/home/${DEPLOY_USER}/.ssh/authorized_keys"
  chmod 600 "/home/${DEPLOY_USER}/.ssh/authorized_keys"
  echo "    authorised DEPLOY_PUBKEY for ${DEPLOY_USER}"
else
  echo "    WARNING: DEPLOY_PUBKEY not provided."
  echo "    Add your CI public key to /home/${DEPLOY_USER}/.ssh/authorized_keys manually."
fi

echo "==> Preparing web root: ${WEB_ROOT}"
mkdir -p "${WEB_ROOT}"
chown -R "${DEPLOY_USER}:www-data" "${WEB_ROOT}"
chmod -R u+rwX,g+rX "${WEB_ROOT}"

echo "==> Installing Nginx site"
mkdir -p /etc/nginx/snippets
install -m 644 "${SCRIPT_DIR}/nginx/security-headers.conf" /etc/nginx/snippets/pesajamaa-security-headers.conf
install -m 644 "${SCRIPT_DIR}/nginx/pesajamaa.conf" /etc/nginx/sites-available/pesajamaa.conf
sed -i "s|pesajamaa\.co\.tz|${DOMAIN}|g; s|/var/www/pesajamaa|${WEB_ROOT}|g" /etc/nginx/sites-available/pesajamaa.conf
ln -sf /etc/nginx/sites-available/pesajamaa.conf /etc/nginx/sites-enabled/pesajamaa.conf
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl reload nginx
echo "    Nginx serving ${DOMAIN} from ${WEB_ROOT}"

echo "==> Configuring firewall"
ufw allow OpenSSH
ufw allow "Nginx Full"
ufw --force enable

if [ "${SKIP_SSL:-0}" = "1" ]; then
  echo "==> Skipping SSL (SKIP_SSL=1)"
elif getent hosts "${DOMAIN}" >/dev/null 2>&1; then
  echo "==> Requesting Let's Encrypt certificate"
  if certbot --nginx --non-interactive --agree-tos --redirect \
      -m "${LETSENCRYPT_EMAIL}" -d "${DOMAIN}" -d "${WWW_DOMAIN}"; then
    echo "    HTTPS enabled for ${DOMAIN} and ${WWW_DOMAIN}"
  else
    echo "    WARNING: certbot failed. Point DNS at this VPS, then run:"
    echo "      certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN}"
  fi
else
  echo "==> DNS for ${DOMAIN} does not resolve yet — skipping SSL."
  echo "    After creating A/AAAA records, run:"
  echo "      certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN}"
fi

cat <<EOF

============================================================
VPS provisioning complete.

Next steps:
1) Point DNS A/AAAA records for ${DOMAIN} and ${WWW_DOMAIN}
   at this VPS public IP (if not done already).
2) Add the matching private key to GitHub repo secrets and
   configure: SSH_HOST, SSH_USER=${DEPLOY_USER}, SSH_PRIVATE_KEY,
   SSH_PORT=22, DEPLOY_PATH=${WEB_ROOT}, SITE_URL=https://${DOMAIN}
3) Push to main — the GitHub Actions workflow will deploy.
============================================================
EOF
