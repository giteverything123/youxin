const Koa = require('koa');
const koaBody = require('koa-body');
const koaCors = require('koa2-cors');
const koaRouter = require('koa-Router');
const koaSession = require('koa-session');
const hassession = require('./modules/hassession');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
let app = new Koa();
app.use(koaBody());
let router = new koaRouter();
app.keys = ['some secret hurr'];
 
const CONFIG = { //koa-session配置项
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 60000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  sameSite: null/** (string) session cookie sameSite options (default null, don't set it) */
};
 
app.use(koaSession(CONFIG, app));
app.use(koaCors({
  origin: 'http://192.168.1.108:3000',
  credentials: true,
  allowMethods: ['GET', 'POST']
}));//支持跨域访问
app.use(hassession);
router
  .use('/login', loginRoutes)
  .use('/register',registerRoutes);

app.use(router.routes());

app.listen(6677, () => {
  console.log('服务已运行，端口为6677');
});