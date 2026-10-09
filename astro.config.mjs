import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify exposes the site's primary address as URL during the build, so
// canonical links, hreflang and the sitemap follow a custom domain if one is
// added later. Builds made elsewhere fall back to the Netlify address.
const site = process.env.URL ?? 'https://jasmin-loeffel.netlify.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
