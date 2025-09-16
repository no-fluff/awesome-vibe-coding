import { spawn } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(spawn);

export default function imageGenerationIntegration() {
  return {
    name: 'image-generator',
    hooks: {
      'astro:build:start': async ({ logger }) => {
        // Only run if OPENAI_API_KEY is available
        if (!process.env.OPENAI_API_KEY) {
          logger.warn('OPENAI_API_KEY not found, skipping image generation');
          return;
        }

        try {
          logger.info('Generating missing images...');
          
          // Run the generate-images script
          const child = spawn('node', ['scripts/generate-images.js'], {
            stdio: 'inherit',
            env: process.env
          });

          await new Promise((resolve, reject) => {
            child.on('exit', (code) => {
              if (code === 0) {
                resolve();
              } else {
                reject(new Error(`Image generation script exited with code ${code}`));
              }
            });
            
            child.on('error', (error) => {
              reject(error);
            });
          });
          
          logger.info('Image generation completed successfully');
        } catch (error) {
          // Don't fail the build if image generation fails
          logger.warn(`Image generation failed: ${error.message}`);
          logger.warn('Continuing build without generating new images');
        }
      }
    }
  };
}