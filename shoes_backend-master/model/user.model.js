const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requried:true
    },
    image:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
})