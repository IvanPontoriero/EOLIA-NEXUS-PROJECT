export default {
  router: {
    //mode: 'hash',
    //base: '/demo/'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eolia Nexus | A DAO financed with NFTs that seeks to venture into web 3.0',
    description: 'A DAO financed with NFTs that seeks to venture into web 3.0 and develop businesses in the flesh and blood reality',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'Eolia Nexus',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'A DAO financed with NFTs that seeks to venture into web 3.0 and develop businesses in the flesh and blood reality',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'A DAO financed with NFTs that seeks to venture into web 3.0 and develop businesses in the flesh and blood reality',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://eolianexus.com',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://eolianexus.com/share.jpg',
    },
    { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    { rel: 'icon', type: 'image/png', href: 'favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  '@assets/css/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  { src: '~/plugins/uikit.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
