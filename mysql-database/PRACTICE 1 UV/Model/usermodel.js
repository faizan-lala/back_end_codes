const pool=require('../Util/dbconnection');

module.exports=class User{
    constructor(name,age,password){
        this.name=name;
        this.age=age;
        this.password=password;
    }
    registerUser(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,conn)=>{
                if(!err){
                    const sql='insert into register(name,age,password) values(?,?,?)';

                    conn.query(sql,[this.name,this.age,this.password],(err,result)=>{
                        err ? reject(err) : resolve(result);
                    });
                    conn.release();
                }
                else
                    reject(err);
            });
        });
    }

    checkUser(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,conn)=>{
                if(!err){
                    const sql='select * from register where name=?';

                    conn.query(sql,[this.name],(err,result)=>{
                        
                        err ? reject(err) : resolve(result);
                    });
                    conn.release();
                }
                else
                    reject(err);
            });
        });
    }
}