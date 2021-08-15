import combineRouters from 'koa-combine-routers'
import routesA from './routesA'
import routesB from './routesB'

const router = combineRouters(
  routesA,
  routesB
)

export default router
