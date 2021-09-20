/* =========================================================================================
 File Name: head.js
 Description: Nuxt Head configuration
 ========================================================================================== */
module.exports = {
  title: process.env.APP_NAME,
  titleTemplate: `%s - ${process.env.APP_SHORT_NAME}`,
  htmlAttrs: {
    lang: process.env.APP_LOCALE
  },

  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'copyright', name: 'copyright', content: 'Debugger.tech' },
    { hid: 'language', name: 'language', content: process.env.APP_LOCALE },
    { hid: 'robots', name: 'robots', content: 'index,follow' },
    { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
    { hid: 'Classification', name: 'Classification', content: 'Textile Company Website' },
    { hid: 'designer', name: 'designer', content: 'Debugger.tech' },
    {
      hid: 'reply-to',
      name: 'reply-to',
      content: 'info@debugger.tech'
    },
    { hid: 'category', name: 'category', content: 'Template' },
    {
      hid: 'format-detection',
      name: 'format-detection',
      content: 'telephone=no'
    },
    {
      hid: 'itemprop-name',
      itemprop: 'name',
      content: process.env.APP_NAME
    },
    {
      hid: 'itemprop-description',
      itemprop: 'description',
      content: process.env.APP_DESCRIPTION
    },
    {
      hid: 'og:title',
      property: 'og:title',
      name: 'og:title',
      content: process.env.APP_NAME
    },
    {
      hid: 'og:description',
      property: 'og:description',
      name: 'og:description',
      content: process.env.APP_DESCRIPTION
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      name: 'og:site_name',
      content: process.env.APP_NAME
    },
    {
      hid: 'og:url',
      property: 'og:url',
      name: 'og:url',
      content: process.env.APP_URL
    },
    {
      hid: 'og:type',
      property: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Personal W'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'A Nuxt PWA starter template with Encrypted Cookies, Express.js, Axios, Vue Router, Passport.js.'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'Morgan Design PWA' },
    { name: 'description', content: 'PWA Morgan Design' },
    { name: 'theme-color', content: '#004d40' }
  ],
  link: [
    { rel: 'icon', sizes: '512x512', type: 'image/x-icon', href: '/icon.png' },
    { rel: 'icon', sizes: '512x512', type: 'image/x-icon', href: '/logo.png' },
    { rel: 'icon', sizes: '192x192', href: '/favicon-192x192.ico' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'apple-touch-icon', href: '/logo.png' }
  ]
};
