export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    // title: "Prismic + Nuxt Blog example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
      // {
      //   hid: "description",
      //   name: "description",
      //   content: "Prismic + Nuxt Blog exampleo"
      // }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
      }
    ],
    script: [
      {
        hid: "anim4",
        defer: true,
        src: "/animation/TweenMax.min.js"
      },
      {
        hid: "nav1",
        defer: true,
        src: "/animation/nav.js"
      }
    ]
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
    "@nuxtjs/prismic"
  ],

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/global-components"],
  tailwindcss: {
    // configPath: '~/config/tailwind.config.js',
    cssPath: "~/assets/css/master.css"
  },
  purgeCSS: {
    whitelist: [/^html/, /^page-/, /^xl/, /^lg/, /^md/, /^sm/, /^w-/, /^rte/]
  },

  prismic: {
    endpoint: "https://broccolou.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer",
    preview: "/preview"
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
    }
  },

  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  }
  // router: {
  //   scrollBehavior: async function(to, from, savedPosition) {
  //     console.log("====");
  //     console.log("scroll", to, from);
  //     console.log("====");

  //     if (savedPosition) {
  //       return savedPosition;
  //     }

  //     const findEl = async (hash, x = 0) => {
  //       return (
  //         document.querySelector(hash) ||
  //         new Promise(resolve => {
  //           if (x > 50) {
  //             return resolve(document.querySelector("#__nuxt"));
  //           }
  //           setTimeout(() => {
  //             resolve(findEl(hash, ++x || 1));
  //           }, 100);
  //         })
  //       );
  //     };

  //     let el = await findEl(to.hash);
  //     if (to.hash && el) {
  //       if ("scrollBehavior" in document.documentElement.style) {
  //         return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  //       } else {
  //         return window.scrollTo(0, el.offsetTop);
  //       }
  //     }

  //     return { x: 0, y: 0 };
  //   }
  // }
};
