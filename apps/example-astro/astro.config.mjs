// @ts-check
import { defineConfig } from 'astro/config';
import adapter from '@zugriff/adapter-astro';

// https://astro.build/config
export default defineConfig({
  output: 'server', // 'static' supported too
  adapter: adapter(),
});
