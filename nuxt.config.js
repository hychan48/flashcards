import colors from 'vuetify/es5/util/colors'


/**
 * use .env file later and make a public doc
 *
 * NUXT_ENV_BASE_URL
 * NUXT_ENV_ROUTER_BASE
 */

const env = {
  // BASE_URL : process.env.NUXT_BASE_URL || 'http://localhost:3000',//auto-overides but might be useful
  BASE_URL: process.env.NUXT_ENV_BASE_URL || 'http://localhost:3000',
  ROUTER_BASE: process.env.NUXT_ENV_ROUTER_BASE || '/',

  //Will be populated
  // baseUrl:undefined,
}
/* setup env */
env.baseUrl = env.BASE_URL + env.ROUTER_BASE


/* Dev plugins */
const plugins = [];
const watch = [];
if (process.env.NODE_ENV !== 'production') {
  console.log('plugin loaded');
  // plugins.push('plugins/dev/contentHotReload.client.js');
  watch.push('content/tableItemsJSON5.json5')
}
/* debugging content json parser */
//file is a string
function parseJSONContentFile(file){
  const demo = [
    {
      "name": "Sébastien Chopin",
      "slug": "atinux",
      "dir": "/authors",
      "path": "/authors/atinux",
      "extension": ".json5"
    },
    {
      "name": "Krutie Patel",
      "slug": "krutiepatel",
      "dir": "/authors",
      "path": "/authors/krutiepatel",
      "extension": ".json5"
    },
    {
      "name": "Sergey Bedritsky",
      "slug": "sergeybedritsky",
      "dir": "/authors",
      "path": "/authors/sergeybedritsky",
      "extension": ".json5"
    }
  ];
try{
  const aOut = JSON.parse(file);
  return demo;
  // return aOut;
  // return aOut;
}catch (e) {
  return demo;
}



}


export default {
  watch,
  env,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  /**
   * for github pages
   * https://nuxtjs.org/docs/2.x/deployment/github-pages/
   * npm run generate; npm run deploy
   *
   */

  router: {
    // base: '/flashcards/',
    base: env.ROUTER_BASE,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    //should check titleTemplate
    titleTemplate: '%s - flashcards',
    title: 'Flashcards',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'flashcards' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // 'html-minifier',//doesnt work
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: process.env.NODE_ENV === 'development' ? true : false,
    //json array doesnt work? debug

    extendParser: {
      '.jsonCONTENT': parseJSONContentFile
    },

  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#devmiddleware

    /* html.minify */
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
        // get removeEmptyElements() {
        //   console.error('html minify')
        //   return true;
        // }
      }
    },
    //
  }
}
