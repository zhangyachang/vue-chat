const mongoose = require('mongoose');

// 连接mongoose 服务器
const db = mongoose.createConnection("mongodb://localhost:27017/blog",{useNewUrlParser: true});

// 用原生的es6的promise 代替mongoose自身实现的promise
mongoose.Promise = global.Promise;

db.on('error', ()=>{
    console.log('数据库连接失败')
});

db.on('open', ()=>{
   console.log('数据库连接成功');
});
const Schema = mongoose.Schema;

module.exports = {
    db,
    Schema
};
