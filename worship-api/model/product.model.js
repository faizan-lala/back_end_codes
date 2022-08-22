const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },

    productPrice:{
        type:Number,
        required:true
    },
    
     productImage:{
         type:String,
         required:true
     },
/*
     productImage_2:{
        type:String,
        required:true
    },

    productImage_3:{
        type:String,
        required:true
    },

    productImage_4:{
        type:String,
        required:true
    },*/

     productQty:{
         type:Number,
         required:true,
         default:1
     },

     productDescription:{
         type:String,
         required:true
     },
     productDiscount:{
         type:Number,
         default:0
     },
     
     categoryId:Schema.Types.ObjectId

});

module.exports=mongoose.model('products',productSchema);