const mongoose=require('mongoose');

//admin model
const categorySchema= new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
    },
    categoryImageUrl:{
        type:String,
        required:true,
        trim:true
    }

   
});
module.exports=mongoose.model('categories',categorySchema);


