import path from 'path'
import Koa from 'koa'
import Cors from '@koa/cors'
import Json from 'koa-json'
import Body from 'koa-body'
import Helmet from 'koa-helmet'
import Static from 'koa-static'
import router from "../routers/router"

const app = new Koa()

app
  .use(Body())
  .use(Cors())
  .use(Helmet())
  .use(Json())
  .use(Static(path.join(__dirname, '../public')))
  .use(router())
  .listen(3000)
  