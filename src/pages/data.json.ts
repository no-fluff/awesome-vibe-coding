import { loadData } from '../lib/data-loader.js';

export const prerender = true;

export async function GET() {
  const payload = loadData();
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
