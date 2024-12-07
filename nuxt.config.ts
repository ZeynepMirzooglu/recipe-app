// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate:"2024-11-28",

  future:{
    compatibilityVersion:4,
  },
  typescript: {
    shim: false
  },
  alias: {
    '#app': 'node_modules/nuxt/dist/app',
  },
  experimental:{
    sharedPrerenderData:false,
    compileTemplate:true,
    resetAsyncDataToUndefined:true,
    templateUtils:true,
    relativeWatchPaths:true,
    defaults:{
      useAsyncData:{
        deep:true,
      },
    },
  },
image:{
  domains:['https://dummyjson.com']
},
  unhead:{
    renderSSRHeadOptions:{
      omitLineBreaks:false,
    },
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image"
  ],
  googleFonts:{
    families:{
      Montserrat:true,
    },
  },
  
})