export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '2021 goals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/styles/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: ' AIzaSyB6Z0RCPlP-edA8t9Dl1aJNN42sxh5nW6s ',
    //       authDomain: '<authDomain>',
    //       databaseURL: 'https://reynolds-2021-goals-default-rtdb.europe-west1.firebasedatabase.app/',
    //       projectId: 'reynolds-2021-goals'
    //       // storageBucket: '<storageBucket>',
    //       // messagingSenderId: '<messagingSenderId>',
    //       // appId: '<appId>',
    //       // measurementId: '<measurementId>'
    //     },
    //     services: {
    //       auth: true, // Just as example. Can be any other service.
    //       database: true
    //     }
    //   }
    // ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://reynolds-2021-goals-default-rtdb.europe-west1.firebasedatabase.app/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    // fb: {
    //   url: 'https://reynolds-2021-goals-default-rtdb.europe-west1.firebasedatabase.app/'
    // },
    app_name: 'Reynolds 2021 Goals'
  }
}
