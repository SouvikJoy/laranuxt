import {
  axios,
  build,
  buildModules,
  colorMode,
  css,
  gsap,
  head,
  helmet, image,
  modules,
  pwa, render, security,
  styleResources
} from './src/config';

export default {
  axios,

  build,

  helmet,

  buildModules,

  gsap,

  colorMode,

  modules,

  head,

  css,

  components: false,

  loading: {
    color: 'skyBlue',
    height: '5px',
    continuous: true
  },

  srcDir: './src',

  pwa,

  styleResources,

  render,

  telemetry: false,

  security,

  image
};
