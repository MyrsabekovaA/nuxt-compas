// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/'
  },
  css: [
    'assets/main.css',
    'assets/base.css'
  ],
  build: {
    transpile: [],
  },
})
