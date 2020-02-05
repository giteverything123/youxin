const koaRouter = require('koa-Router');
const router = new koaRouter();

router.post('/', async (ctx, next) => {
  ctx.body = '这是login测试接口';
  await next();
});

module.exports = router.routes();