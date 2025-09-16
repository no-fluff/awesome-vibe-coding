import { defineConfig } from 'astro/config';
import readmeIntegration from './src/lib/readme-integration.js';
import imageGenerationIntegration from './src/lib/image-generation-integration.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://no-fluff.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [imageGenerationIntegration(), readmeIntegration()]
});