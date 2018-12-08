const express=require('express');
const app=express();

// body解析
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// 处理文件路径的模块
const path = require('path');

// view处理 配置ejs模板文件存放路径
app.set('views',path.join(__dirname,'views'));
// 为express服务器，设置模板引擎类型
app.set('view engine','ejs');

// 静态文件处理，定义并创建一个目录存放静态文件
app.use(express.static('src'));

// 页面路由 路由‘/’ 执行 index
const home=require('./routers/home');
app.use('/',home);

// 接口路由处理
const add = require('./api/add');
app.use('/add',add);


// 运行 127.0.0.1:9999
const port=9999
const server = app.listen(9999,function () {
    console.log('启动成功,路径：'+'127.0.0.1:'+port)
})