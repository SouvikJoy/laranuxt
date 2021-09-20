import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\src\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_45974e44 from 'nuxt_plugin_workbox_45974e44' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_image_61820023 from 'nuxt_plugin_image_61820023' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_pluginserver_2bba5841 from 'nuxt_plugin_pluginserver_2bba5841' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_73fe328e from 'nuxt_plugin_pluginclient_73fe328e' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_metaplugin_f0fc8278 from 'nuxt_plugin_metaplugin_f0fc8278' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_e7ad3790 from 'nuxt_plugin_iconplugin_e7ad3790' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_767b0328 from 'nuxt_plugin_axios_767b0328' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_gsapModule_add179ae from 'nuxt_plugin_gsapModule_add179ae' // Source: .\\gsapModule.js (mode: 'all')
import nuxt_plugin_router_0d31ed87 from 'nuxt_plugin_router_0d31ed87' // Source: .\\router.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Morgan Design","titleTemplate":"%s - Morgan Design","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"copyright","name":"copyright","content":"Debugger.tech"},{"hid":"language","name":"language","content":"en"},{"hid":"robots","name":"robots","content":"index,follow"},{"hid":"googlebot","name":"googlebot","content":"index,follow"},{"hid":"Classification","name":"Classification","content":"Textile Company Website"},{"hid":"designer","name":"designer","content":"Debugger.tech"},{"hid":"reply-to","name":"reply-to","content":"info@debugger.tech"},{"hid":"category","name":"category","content":"Template"},{"hid":"format-detection","name":"format-detection","content":"telephone=no"},{"hid":"itemprop-name","itemprop":"name","content":"Morgan Design"},{"hid":"itemprop-description","itemprop":"description","content":"Textile Company Website"},{"hid":"og:title","property":"og:title","name":"og:title","content":"Morgan Design"},{"hid":"og:description","property":"og:description","name":"og:description","content":"Textile Company Website"},{"hid":"og:site_name","property":"og:site_name","name":"og:site_name","content":"Morgan Design"},{"hid":"og:url","property":"og:url","name":"og:url","content":"https:\u002F\u002Fmorgandesign.style"},{"hid":"og:type","property":"og:type","name":"og:type","content":"website"},{"hid":"twitter:title","name":"twitter:title","content":"Personal W"},{"hid":"twitter:description","name":"twitter:description","content":"A Nuxt PWA starter template with Encrypted Cookies, Express.js, Axios, Vue Router, Passport.js."},{"hid":"twitter:card","name":"twitter:card","content":"summary"},{"name":"format-detection","content":"telephone=no"},{"name":"apple-mobile-web-app-status-bar-style","content":"black"},{"name":"apple-mobile-web-app-title","content":"Morgan Design PWA"},{"name":"description","content":"PWA Morgan Design"},{"name":"theme-color","content":"#004d40"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"og:image","name":"og:image","property":"og:image","content":"morgandesign.style\u002F_nuxt\u002Ficons\u002Ficon_512x512.b51ad2.png"},{"hid":"og:image:width","name":"og:image:width","property":"og:image:width","content":512},{"hid":"og:image:height","name":"og:image:height","property":"og:image:height","content":512},{"hid":"og:image:type","name":"og:image:type","property":"og:image:type","content":"image\u002Fpng"}],"link":[{"rel":"icon","sizes":"512x512","type":"image\u002Fx-icon","href":"\u002Ficon.png"},{"rel":"icon","sizes":"512x512","type":"image\u002Fx-icon","href":"\u002Flogo.png"},{"rel":"icon","sizes":"192x192","href":"\u002Ffavicon-192x192.ico"},{"rel":"manifest","href":"\u002Fmanifest.json"},{"rel":"apple-touch-icon","href":"\u002Flogo.png"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.b51ad2.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.b51ad2.png","sizes":"512x512"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonese_640x1136.b51ad2.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonese"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphone6_50x1334.b51ad2.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphone6"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphoneplus_1080x1920.b51ad2.png","media":"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphoneplus"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonex_1125x2436.b51ad2.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonex"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonexr_828x1792.b51ad2.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonexr"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_iphonexsmax_1242x2688.b51ad2.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-iphonexsmax"},{"href":"\u002F_nuxt\u002Ficons\u002Fsplash_ipad_1536x2048.b51ad2.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipad"},{"media":"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro1"},{"media":"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro2"},{"media":"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)","rel":"apple-touch-startup-image","hid":"apple-touch-startup-image-ipadpro3"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.5c601d1e.json","hid":"manifest"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_45974e44 === 'function') {
    await nuxt_plugin_workbox_45974e44(app.context, inject)
  }

  if (typeof nuxt_plugin_image_61820023 === 'function') {
    await nuxt_plugin_image_61820023(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_2bba5841 === 'function') {
    await nuxt_plugin_pluginserver_2bba5841(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_73fe328e === 'function') {
    await nuxt_plugin_pluginclient_73fe328e(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_f0fc8278 === 'function') {
    await nuxt_plugin_metaplugin_f0fc8278(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_e7ad3790 === 'function') {
    await nuxt_plugin_iconplugin_e7ad3790(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_767b0328 === 'function') {
    await nuxt_plugin_axios_767b0328(app.context, inject)
  }

  if (typeof nuxt_plugin_gsapModule_add179ae === 'function') {
    await nuxt_plugin_gsapModule_add179ae(app.context, inject)
  }

  if (typeof nuxt_plugin_router_0d31ed87 === 'function') {
    await nuxt_plugin_router_0d31ed87(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
