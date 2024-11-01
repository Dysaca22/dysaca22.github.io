import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dysaca22.github.io',
  base: '/',
  integrations: [icon(), tailwind()],
});