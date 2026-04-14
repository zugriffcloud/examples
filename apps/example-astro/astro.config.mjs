import adapter from '@zugriff/adapter-astro';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: adapter(),
});
