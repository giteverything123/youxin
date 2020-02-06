const koaRouter = require('koa-Router');
const Db = require('../../modules/db');
const router = new koaRouter();


router.post('/', async (ctx, next) => {
  let body = ctx.request.body;
  let {username, password1} = body;
  //用户名正则，6到16位（字母，数字，下划线，减号）
  const userNameReg = /^[a-zA-Z0-9_-]{6,16}$/;
  //密码至少包含 数字和英文，长度6-20
  const pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
  if (!userNameReg.test(username)) {
    ctx.body = {success: false, msg: '用户名规则不正确'};
    return;
  }
  if (!pwdReg.test(password1)) {
    ctx.body = {success: false, msg: '密码规则不正确'};
    return;
  }
  //首先去查找
  let data = await Db.find('users', {username,password:password1});
  if (Array.isArray(data) && data.length > 0) {
    ctx.body = {success: false, msg: '该账号已存在'};
    return;
  }
  let res = await Db.insertOne('users', {username, password: password1});
  if (res.result.ok) {
    ctx.body = {success:true, msg: '注册成功'};
  } else {
    ctx.body = {success:false, msg: '注册失败'};
  }
  await next();
});

module.exports = router.routes();