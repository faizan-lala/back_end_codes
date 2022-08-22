const mysql=require('mysql');

const pool=mysql.createPool({
    connectionLimit:100,
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'UV1'
});

module.exports=pool;