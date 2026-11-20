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

## QaribuBot AI chatbot

The site uses the **official QaribuBot website widget** — the integration method
documented at <https://qaribubot.com/docs/install-the-widget>. There is no
publicly documented chat API for a custom frontend/backend, so no API endpoints
or request formats have been invented.

QaribuBot's `pk_live_…` value is a **public, domain-locked website key** that the
official widget must load in the browser. It is not a secret token. Keep it out
of Git by using environment variables; never put a secret/API token in a
`PUBLIC_` variable.

### Local configuration

```bash
cp .env.example .env
```

Fill in the values from **QaribuBot dashboard → Domains → `</> Code snippet`**:

| Variable | Meaning |
| --- | --- |
| `PUBLIC_QARIBUBOT_API_KEY` | The `pk_live_…` key from the snippet. Leave blank to disable the widget. |
| `PUBLIC_QARIBUBOT_API_BASE` | The `data-api-base` value from the snippet (normally `https://qaribubot.com`). |
| `PUBLIC_QARIBUBOT_WIDGET_URL` | The snippet's `src` (normally `https://qaribubot.com/widget.js`). |

Restart `npm run dev` after changing `.env`. The shared script is rendered at
the end of `<body>` in `src/layouts/BaseLayout.astro`, so it appears on every
page without duplicating it.

### Production configuration

The GitHub Actions build reads the same values from repository **Variables**
(preferred, because the key is public) or, if preferred, from **Secrets**:
`PUBLIC_QARIBUBOT_API_KEY`, `PUBLIC_QARIBUBOT_API_BASE`,
`PUBLIC_QARIBUBOT_WIDGET_URL`. PR builds without them simply omit the widget.

### QaribuBot dashboard setup

- Register the exact public domain visitors use (`pesajamaa.co.tz` / `www`).
  The widget will not answer from `localhost` or a staging URL unless that
  address is registered too; the official widget allows local testing via its
  own localhost bypass.
- Let QaribuBot read the public pages, then check **Knowledge** and **Conversations**.
- Under **Widget**, set a bilingual greeting, tone/persona (English + Kiswahili,
  professional, never invent prices or business facts), position **bottom right**,
  and brand colours (`#026DDE` primary, `#18B49C` accent).
- Publish support hours, physical location and contact details on public pages
  or add them via **Knowledge → Add knowledge manually**; the bot must not guess
  them. The site currently publishes `support@pesajamaa.co.tz`, which QaribuBot
  can turn into an Email contact button.
- The official widget already provides the launcher, smooth open/close,
  responsive panel, greeting, separate message bubbles, typing indicator,
  auto-scroll, error messages, source links, contact buttons and feedback votes.
  It does **not** expose timestamps or a clear-conversation control, so those
  are intentionally not faked with a custom UI.

### Testing checklist

1. Run `npm run dev`, open the site, and confirm the launcher appears.
2. Open the chat and confirm the configured greeting appears.
3. Ask an English question and a Kiswahili question; confirm real answers from
   QaribuBot and the conversation appearing in the dashboard.
4. Submit an empty message — the widget must not send a request.
5. Block `qaribubot.com` in DevTools/network (or use an invalid key) and confirm
   the widget shows its error message rather than a fake reply.
6. Check a phone viewport (~375px) and verify the panel/launcher fit.
7. In DevTools, confirm the only credential present is the public `pk_live_…`
   website key; no secret/token is shipped to the browser.

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
                        FeatureRow, AudienceCard, StatCounter, ProgressBar, LiveFeed,
                        QaribuBotWidget (official widget snippet)
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
