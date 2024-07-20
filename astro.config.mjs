import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'night-owl'
    }
  },
  output: "server",
  adapter: vercel()
});