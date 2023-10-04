// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  css: ["~/assets/css/fonts.css", "~/assets/css/global.css"],
});
