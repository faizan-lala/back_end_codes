const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    qty:{type:Number,required:true}
});

module.exports=mongoose.model('category',categorySchema);