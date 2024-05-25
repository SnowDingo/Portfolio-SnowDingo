import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-i18n-starter.pages.dev',
  integrations: [mdx(), sitemap()],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'ja', 'zh-cn'],
  //   routing: {
  //     prefixDefaultLocale: true,
  //   },
  // },
});
