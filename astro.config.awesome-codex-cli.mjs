import { defineConfig } from 'astro/config';
import readmeIntegration from './src/lib/readme-integration.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://awesome-codex-cli.com',
  base: '/',
  output: 'static',
  outDir: './dist/awesome-codex-cli',
  build: {
    format: 'file'
  },
  integrations: [readmeIntegration()],
  vite: {
    define: {
      'import.meta.env.PUBLIC_SITE_VARIANT': JSON.stringify('awesome-codex-cli'),
      'import.meta.env.PUBLIC_AGENT_FILTER': JSON.stringify('codex-cli'),
      'import.meta.env.PUBLIC_SHOW_AGENT_FILTER': JSON.stringify(false)
    }
  }
});