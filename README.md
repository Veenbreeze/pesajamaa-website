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

## Deploy to Vercel

This is a plain static build — no adapter needed.

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`

Push to a Git repo and import it in Vercel, or run `vercel` / `vercel --prod`
from the project root.

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
