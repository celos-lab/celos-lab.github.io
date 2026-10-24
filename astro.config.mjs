// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://celos-lab.github.io',
  // Inline the CSS into each page. With a separate hashed file, a browser holding the previous
  // HTML (cached up to 10 min by GitHub Pages) asks for a CSS file the new deploy has removed and
  // shows the page unstyled.
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
