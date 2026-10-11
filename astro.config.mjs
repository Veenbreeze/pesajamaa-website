// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static marketing site. Deployable to Vercel as a plain static build.
// https://astro.build/config
export default defineConfig({
  site: 'https://pesajamaa.co.tz',
  integrations: [
    tailwind({
      // We manage the base styles ourselves in src/styles/global.css
      applyBaseStyles: false,
    }),
  ],
});
