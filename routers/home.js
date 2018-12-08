const express = require('express');
const router = express.Router();

// 设置首页路由get请求

router.get('/',function (req,res,next) {

    //模板与注入数据
    res.render('home',{
        title:'你好'
    })
})
module.exports = router;