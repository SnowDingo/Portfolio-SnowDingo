import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://SnowDingo.github.io',
  base: '/PortfolioSnowDingo',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja',],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'night-owl',
    },
  },
});
