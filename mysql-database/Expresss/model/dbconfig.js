const mysql=require('mysql');
const pool=mysql.createPool({
    connectionLimit:100,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'website'
});

module.exports=pool;