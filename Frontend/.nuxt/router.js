import { createRouter as customCreateRouter } from '../src/router.js'

const createDefaultRouter = null
const routerOptions = null

export function createRouter(ssrContext, config) {
  return customCreateRouter(ssrContext, createDefaultRouter, routerOptions, config)
}
