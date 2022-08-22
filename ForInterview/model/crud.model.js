const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const crudSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('crudOperation',crudSchema);