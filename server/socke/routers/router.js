const Router = require('koa-router');
const fs = require('fs');
const con = require('../control/fn');
const router = new Router();


router.get('/', async ctx => {
    ctx.body = fs.readFileSync('./public/index.html','utf8');
});

module.exports = router;
