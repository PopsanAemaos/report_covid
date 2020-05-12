
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/vuetify',
    '~/plugins/axios' //-- add plugins axios
  ],

  proxy: {
    '/api': 'http://127.0.0.1:8888', //-- ตั้งค่า map proxy url api server
    ws: true
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/axios',
    '@nuxtjs/proxy' ,//-- add modules proxy 
    'bootstrap-vue/nuxt',

  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      // 'vuetify',
      // 'vue-axios' //-- add vendor vue-axios
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
