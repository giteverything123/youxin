const koaRouter = require('koa-Router');
const Db = require('../../modules/db');
const router = new koaRouter();


router.post('/', async (ctx, next) => {
  let body = ctx.request.body;
  let data = await Db.find('users', body);
  if (Array.isArray(data) && data.length > 0) {
    ctx.body = {success: true, msg: '登录成功'};
    ctx.session.userinfo = body;
  } else {
    ctx.body = {success: false, msg: '用户名或密码错误'};
  }
  await next();
});

module.exports = router.routes();