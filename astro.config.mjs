import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address, used for canonical links, hreflang and the sitemap.
// - SITE_URL, if set, wins (e.g. for a custom domain later).
// - Cloudflare Pages sets CF_PAGES during its builds; every build there,
//   previews included, points to the production address on pages.dev.
// - Netlify exposes the site's primary address as URL.
// Builds made elsewhere fall back to the Cloudflare address.
const site =
  process.env.SITE_URL ??
  (process.env.CF_PAGES ? 'https://jasmin-loeffel.pages.dev' : undefined) ??
  process.env.URL ??
  'https://jasmin-loeffel.pages.dev';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
