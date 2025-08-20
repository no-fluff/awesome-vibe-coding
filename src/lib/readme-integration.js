import fs from 'fs';
import path from 'path';
import { generateReadme } from './generate-readme.js';

export default function readmeIntegration() {
  return {
    name: 'readme-generator',
    hooks: {
      'astro:build:done': async ({ dir, routes, pages, logger }) => {
        try {
          logger.info('Generating README.md...');
          
          const readme = generateReadme();
          const outputPath = path.join(process.cwd(), 'README.md');
          
          fs.writeFileSync(outputPath, readme);
          
          logger.info('README.md generated successfully');
        } catch (error) {
          logger.error(`Error generating README.md: ${error.message}`);
          throw error;
        }
      }
    }
  };
}