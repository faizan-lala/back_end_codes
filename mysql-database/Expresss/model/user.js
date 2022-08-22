const pool = require('./dbconfig');
module.exports = class Login{
    constructor(username,password,email){
     this.username = username;
     this.password = password;
     this.email = email;
     
    }
    checkUser(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                let sql = "select * from login where email = ? and password = ?";
                con.query(sql,[this.email,this.password],(err,result)=>{
                  if(err) reject(err);
                  else
                    resolve(result);
                });
              }  
              else
                reject(err);
           }); 
        });
    } 
    save(){
      return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
              if(err) reject(err);
              else{
                let sql = "insert into login(email,password,username) values(?,?,?)";  
                con.query(sql,[this.email,this.password,this.username],(err,result)=>{
                  con.release();
                  if(err) reject(err);
                  else
                    resolve(result);
                });  
              }
          });
      });    
    }
}








