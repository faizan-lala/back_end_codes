const pool = require("../util/database");
module.exports = class Product{
  constructor(productName,productPrice,productQty,description,frontView,backView,leftView,rightView){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQty = productQty;
    this.description = description;
    //this.id = id;
    this.frontViewImage = frontView;
    this.backViewImage = backView;
    this.leftViewImage = leftView;
    this.rightViewImage = rightView;     
  }
  static fetchAllProduct(){
    return new Promise((resolve,reject)=>{
      pool.getConnection((err,con)=>{
        if(!err){
          let sql = "select * from product";
          con.query(sql,(err,queryResults)=>{
            con.release();
            err ? reject(err) : resolve(queryResults);
          });
        }
        else
          reject(err);
      })
    });
  }
  save(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
               let sql = "insert into product(productName,productPrice,productQty,description,frontView,backView,leftView,rightView) values(?,?,?,?,?,?,?,?)";
                con.query(sql,[
                    this.productName,
                    this.productPrice*1,
                    this.productQty*1,
                    this.description,
                   // this.id*1,
                    this.frontView,
                    this.backView,
                    this.leftView,
                    this.rightView
                ],(err,queryResult)=>{
                 con.release();   
                 err ? reject(err) : resolve(queryResult); 
                });
            }
            else
             reject(err);
        })                
      });
  }
}