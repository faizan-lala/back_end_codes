const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const cartSchema=new mongoose.Schema({
     productList:[{
         type:Schema.Types.ObjectId,
         required:true,
         ref:'product'
     }]
})
