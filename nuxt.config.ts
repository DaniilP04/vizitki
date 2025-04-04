// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css : ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image']
})