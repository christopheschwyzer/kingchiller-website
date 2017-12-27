module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'kingchiller',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Donate time - An interactive story experiment'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'kingchiller, king, chiller, chill, help, time, recreation, chill out, donate, bitcoin, ehterum, dogecoins, momo, cryptokitties'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'kingchiller'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'kingchiller'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.kingchiller.com'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.kingchiller.com/og-image.jpg'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'kingchiller'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'An interactive story experiment'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'kingchiller'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en-US'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@santihans4056'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@stophecom'
      }
    ],
    link: [
      {
        rel: 'manifest',
        href: '/manifest.json'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver&flags=gated'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: '~/components/Spinner.vue',

  plugins: [
    {
      src: '~plugins/vueScrollReveal.js',
      ssr: false
    }
  ],

  css: [
    {
      src: '~assets/styles.scss',
      lang: 'scss'
    }
  ],

  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-20423829-1'
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
