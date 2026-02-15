import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  server: {
    compressPublicAssets: false,
    preset: './node_modules/@zugriff/preset-nitro',
  },
});
