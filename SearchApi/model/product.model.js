const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   price:{
       type:Number,
       required:true
   },
   category:{
       type:String,
       required:true
   },
   brand:{
       type:String,
       required:true
   },

   description:{
       type:String
   },
   productImage:{
       type:String,
       required:true
   }
   

});

module.exports=mongoose.model('product',productSchema);