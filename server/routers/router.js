const Router = require('koa-router');
const fs = require('fs');
const con = require('../control/fn');
const router = new Router();


router.get('/', async ctx => {
    ctx.body = fs.readFileSync('./public/index.html','utf8');
});

router.post('/login', async ctx => {
    console.log('登录了')
    console.log(ctx.request.body);
    let loginInfo = ctx.request.body;
    await new Promise((resolve, reject) => {
        // 暂时先这样让我看到那个loadding的效果
        setTimeout(function() {
            if(loginInfo.user === 'aaa' || loginInfo.user === 'bbb' || loginInfo.user === 'ccc'){
                resolve({
                    status: 200,
                    msg: '登录成功'
                });
            }else{
                reject({
                    status: 400,
                    msg: '登录失败'
                });
            }
        }, 0)
    })
    .then(res => {
        ctx.body = res;
    })
    .catch(err => {
        ctx.body = err;
    })
})

module.exports = router;
