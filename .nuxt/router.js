import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0d69a7e6 = () => interopDefault(import('..\\pages\\Cookie.vue' /* webpackChunkName: "pages_Cookie" */))
const _5d6848c7 = () => interopDefault(import('..\\pages\\DynamitClicker.vue' /* webpackChunkName: "pages_DynamitClicker" */))
const _003eab41 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _370160e8 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _a445b36c = () => interopDefault(import('..\\pages\\modalpage.vue' /* webpackChunkName: "pages_modalpage" */))
const _3b487b9c = () => interopDefault(import('..\\pages\\TabsTest.vue' /* webpackChunkName: "pages_TabsTest" */))
const _5bd40060 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/Cookie",
      component: _0d69a7e6,
      name: "Cookie"
    }, {
      path: "/DynamitClicker",
      component: _5d6848c7,
      name: "DynamitClicker"
    }, {
      path: "/home",
      component: _003eab41,
      name: "home"
    }, {
      path: "/inspire",
      component: _370160e8,
      name: "inspire"
    }, {
      path: "/modalpage",
      component: _a445b36c,
      name: "modalpage"
    }, {
      path: "/TabsTest",
      component: _3b487b9c,
      name: "TabsTest"
    }, {
      path: "/",
      component: _5bd40060,
      name: "index"
    }],

    fallback: false
  })
}
