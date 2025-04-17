// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: './node_modules/@zugriff/preset-nitro',
  },
  devtools: { enabled: true },
});
