const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config/config');

//post
router.post('/', function (req, res) {


    // 连接数据库
    const connection = mysql.createConnection(config);
    connection.connect();

    // 获取传进来的参数
    var name = req.body.name || '';

    //添加构建语句，Id属性为auto_increment
    var sql = "insert into user values ('',"+connection.escape(name)+")";
    console.log(sql);

    // 执行语句
    connection.query(sql,function (err,rows,fields) {
        //返回数据
        res.send({
            status:true,
            data:rows,
            message:"处理成功！"
        });
        connection.end();
    })
})
module.exports = router;
