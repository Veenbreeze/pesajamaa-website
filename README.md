# PesaJamaa — Marketing Website

Static marketing / landing site for **PesaJamaa**, a Community Finance &
Engagement Platform for Tanzania. Built with **Astro + Tailwind CSS**, zero JS
by default plus tiny vanilla-JS islands for the animated counters, the live
contribution ticker, progress bars and scroll-reveal.

> This is a marketing site only — no backend, auth, or real payments. The
> product and mobile-money integration are built by a separate team.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build & preview

```bash
npm run build    # outputs a static site to ./dist
npm run preview  # serves the production build locally
```

## Deploy to a Contabo VPS (GitHub Actions CI/CD)

The site is a plain static build (`dist/`), served by Nginx on the VPS. Every
push to `main` runs type-check + build, then rsyncs `dist/` to the server.

### 1. Provision the VPS (one time)

Point the `pesajamaa.co.tz` and `www` DNS records at the Contabo VPS, then SSH
in and run the provisioning script from a checkout of this repo:

```bash
git clone https://github.com/Veenbreeze/pesajamaa-website.git
cd pesajamaa-website
sudo DOMAIN=pesajamaa.co.tz \
     DEPLOY_PUBKEY="ssh-ed25519 AAAA... your CI public key ..." \
     bash deploy/setup-vps.sh
```

It installs Nginx, rsync and certbot, creates the `deploy` user, enables the
site, configures UFW and (once DNS resolves) obtains a Let's Encrypt
certificate. Nginx config lives at `deploy/nginx/pesajamaa.conf`.

### 2. Create a deploy SSH key

On your machine:

```bash
ssh-keygen -t ed25519 -C "github-actions@pesajamaa" -f ./pesajamaa_deploy -N ""
```

- Put the **public** key (`pesajamaa_deploy.pub`) on the VPS (pass it as
  `DEPLOY_PUBKEY` above, or append it to
  `/home/deploy/.ssh/authorized_keys`).
- Store the **private** key (`pesajamaa_deploy`) in GitHub.

### 3. Add GitHub Actions secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Example | Required |
| --- | --- | --- |
| `SSH_HOST` | `203.0.113.10` or `vps.pesajamaa.co.tz` | yes |
| `SSH_USER` | `deploy` | yes |
| `SSH_PRIVATE_KEY` | full contents of `pesajamaa_deploy` | yes |
| `SSH_PORT` | `22` | no (defaults to 22) |
| `DEPLOY_PATH` | `/var/www/pesajamaa` | yes |
| `SSH_KNOWN_HOSTS` | output of `ssh-keyscan -H <host>` | no (keyscanned if empty) |
| `SITE_URL` | `https://pesajamaa.co.tz` | no (enables health check) |

### 4. Deploy

Push to `main` (or run the workflow manually via **Actions → CI/CD → Run
workflow**). The workflow is `.github/workflows/deploy.yml`. Pull requests only
run type-check + build; deploys happen only from `main`.

### Manual build check

```bash
npm ci
npm run check    # astro check (TypeScript)
npm run build    # outputs ./dist
npm run ci       # check + build
```

## Brand tokens — change in ONE place

All colours, fonts, radii and shadows live in **`tailwind.config.mjs`**
(mirrored as CSS variables in `src/styles/global.css`). Primary is blue
(`#026DDE`); teal (`#18B49C`, from the logo) is the secondary accent.

## Where to drop assets

Everything public-facing lives in **`/public`**:

| File | Status | Notes |
| --- | --- | --- |
| `pesajamaa-logo.png` | ✅ provided | Real logo (400×114). Used in navbar + footer (footer sits it on a white chip because its text is dark). |
| `favicon.svg` | ⚠️ **placeholder** | Teal rounded-square "P". **Replace with your own** `favicon.png` / `favicon.svg`. |
| `favicon.png` | ❌ missing | Optional PNG fallback — drop one in to use it. |
| `og-image.svg` | ⚠️ **placeholder** | Social-share image. Replace with a real **1200×630 `og-image.png`** for best support, then update the reference in `src/layouts/BaseLayout.astro`. |

Product-UI mockups in the feature sections are built in HTML/CSS (not images),
so there's nothing to swap for those — edit them directly in
`src/pages/index.astro`.

## Project structure

```
.github/workflows/      CI/CD (type-check, build, deploy on push to main)
deploy/                 VPS setup script + Nginx config (Contabo)
public/                 logo, favicon, OG image
src/
  components/           Navbar, Footer, Button, SectionTitle, ModuleCard,
                        FeatureRow, AudienceCard, StatCounter, ProgressBar, LiveFeed
  layouts/BaseLayout    <head> (SEO/OG/fonts/favicon) + Navbar + Footer shell
  pages/index.astro     the single-page scroll (all sections, in order)
  scripts/motion.js     scroll-reveal · count-up · progress-bar fills
  styles/global.css     Tailwind layers, brand CSS vars, reveal + marker styles
tailwind.config.mjs     👈 brand tokens
```

## Accessibility & motion

Semantic HTML, keyboard-navigable nav/dropdowns, visible focus rings, a skip
link, and `aria-live` on the live feed. All motion (counters, ticker, reveals,
progress) is disabled under `prefers-reduced-motion`.
