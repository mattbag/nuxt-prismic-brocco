export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    // title: "Prismic + Nuxt Blog example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // {
      //   hid: "description",
      //   name: "description",
      //   content: "Prismic + Nuxt Blog exampleo"
      // }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // {
      //   rel: "stylesheet",
      //   href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      // }
    ],
    script: [
      {
        hid: "anim4",
        defer: true,
        src: "/animation/TweenMax.min.js",
      },
      {
        hid: "nav1",
        defer: true,
        src: "/animation/nav.js",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ed145a" },

  /*
   ** Global CSS
   */
  // css: ["@/assets/css/resetr.css", "@/assets/css/common.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // modules for full static before `nuxt export` (coming in v2.12)
    "@/modules/static",
    "@/modules/crawler",
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic",
  ],

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/global-components"],
  tailwindcss: {
    // configPath: '~/config/tailwind.config.js',
    cssPath: "~/assets/css/master.css",
  },
  purgeCSS: {
    whitelist: [/^html/, /^page-/, /^xl/, /^lg/, /^md/, /^sm/, /^w-/, /^rte/],
  },

  prismic: {
    endpoint: "https://broccolou.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer",
    preview: "/preview",
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    },
  },

  generate: {
    fallback: "404.html", // Netlify reads a 404.html, Nuxt will load as an SPA
  },
};
