// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],
  alias: {
    '~': './',
    '@': './'
  },
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  },
  icon: {
    serverBundle: {
      collections: ['fa6-solid'] // Pre-bundle Font Awesome 6 solid icons
    }
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/login',
      exclude: ['/login'] // Página de login não precisa de proteção
    }
  }
})