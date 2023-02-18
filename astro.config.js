import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import critters from 'astro-critters';

export default defineConfig({
  integrations: [
    mdx(),
    vue(),
    critters({
      /**
       * @see https://github.com/GoogleChromeLabs/critters#properties
       */
      critters: {
        preload: false,
      },
    }),
  ],
});
