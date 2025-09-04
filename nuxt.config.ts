// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    typeCheck: false,
  },
  modules: ["@nuxt/ui", "nuxt-icons"],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  nitro: {
    preset: 'node-server'
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/global.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
});
