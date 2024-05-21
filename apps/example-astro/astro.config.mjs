import { defineConfig } from 'astro/config';
import adapter from '@zugriff/adapter-astro';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: adapter(),
});
