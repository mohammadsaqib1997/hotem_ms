module.exports = {
  head: {
    title: 'hotel_ms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/fontawesome/css/fontawesome-all.min.css' },
    ],
    script: [
      { src: '/js/jquery-3.3.1.min.js' }
    ]
  },
  loading: { color: '#3B8070' },
  mode: 'spa',
  plugins: ['~/plugins/s-vue-validator.js', '~/plugins/vue-g-map.js'],
  modules: [
    '@nuxtjs/axios',
    ['nuxt-buefy', {
      defaultIconPack: 'fas',
      materialDesignIcons: false
    }]
  ],
  build: {
    babel: {
      plugins: ["transform-runtime"],
      presets: ['es2015', 'stage-0']
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue2-google-maps']
  },
  router: {
    middleware: 'auth'
  },
}
