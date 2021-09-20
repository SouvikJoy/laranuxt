import Vue from 'vue';
import Router from 'vue-router';

import Index from '~/pages/Index';
import About from '~/pages/About';
import Products from '~/pages/Products';
import Contact from '~/pages/Contact';
import Gallery from '~/pages/Gallery';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/products/:category?/:slug?',
    name: 'products',
    component: Products,
    props: route => ({ category: route.params.category, slug: route.params.slug })
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  }
];

export function createRouter () {
  return new Router({
    base: '/',
    mode: 'history',
    linkActiveClass: 'morgan-link-active',
    linkExactActiveClass: 'morgan-link-exact-active',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      let position = {};

      if (to.matched.length < 2) {
        position = { x: 0, y: 0 };
      } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
        position = { x: 0, y: 0 };
      }
      if (to.hash) {
        position = { selector: to.hash };
      }

      return position;
    }
  });
}
