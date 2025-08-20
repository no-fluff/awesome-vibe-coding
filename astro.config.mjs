import { defineConfig } from 'astro/config';
import readmeIntegration from './src/lib/readme-integration.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://no-fluff.github.io',
  base: '/awesome-vibe-coding',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [readmeIntegration()]
});