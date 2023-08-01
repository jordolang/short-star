import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import markdoc from "@astrojs/markdoc";
import vue from "@astrojs/vue";
import node from "@astrojs/node";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";
import lit from "@astrojs/lit";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), partytown(), image(), markdoc(), vue(), react(), svelte(), prefetch(), lit(), alpinejs()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});