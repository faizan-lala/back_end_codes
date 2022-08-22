const { response, request } = require("express");
const Category=require('../model/categorymodel');

exports.addCategory=(request,response)=>{
    response.render('addcategory.ejs');
}

exports.AddCategory=(request,response)=>{
   let name=request.body.name;
   let price =request.body.price;
   let qty=request.body.qty;

   let c=new Category({
      name: name,
      price:price*1,
      qty:qty*1
   });
    
   c.save().then(result=>{
       return response.send('successful');
   }).catch(error=>{
       console.log(error)
   });
}