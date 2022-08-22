const pool=require('../Util/dbconnection');

module.exports=class Product{
    constructor(name,prize,image,description){
        this.name=name;
        this.prize=prize;
        this.image=image;
        this.description=description;
    }
    product(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,conn)=>{
                if(!err){
                    const sql='insert into product(name,prize,image,description) values(?,?,?,?)';

                    conn.query(sql,[this.name,this.prize,this.image,this.description],(err,result)=>{
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