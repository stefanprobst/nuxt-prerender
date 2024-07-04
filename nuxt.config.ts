export default defineNuxtConfig({
  experimental: {
    componentIslands: true
  },
  components: [{ path: './components', pathPrefix: false }],
  devtools: { enabled: true },
  routeRules: {
    "/": { prerender: true },
  },
});
