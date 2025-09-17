import { defineConfig } from 'astro/config';
import readmeIntegration from './src/lib/readme-integration.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://awesome-gemini-cli.com',
  base: '/',
  output: 'static',
  outDir: './dist/awesome-gemini-cli',
  build: {
    format: 'file'
  },
  integrations: [readmeIntegration()],
  vite: {
    define: {
      'import.meta.env.PUBLIC_SITE_VARIANT': JSON.stringify('awesome-gemini-cli'),
      'import.meta.env.PUBLIC_AGENT_FILTER': JSON.stringify('gemini-cli'),
      'import.meta.env.PUBLIC_SHOW_AGENT_FILTER': JSON.stringify(false)
    }
  }
});