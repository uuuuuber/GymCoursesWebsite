const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'tjh246780', //自己数据库名字
    database:"sys" //自己数据库密码
})

module.exports=db