const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    brand:{
        type:String,
        required:true,
        trim: true
    },
    size:[{
        type:String,
        required:true,
    }],
    quantity:{
        type:number,
        required:true,
    },
    color:[{
        name:{
            type:String,
            required:true
        },
        image1:{
            type:String,
            required:true
        },
        image2:{
            type:String,
        },
        image3:{
            type:String,
        },
        image4:{
            type:String,
        }
    }],
    price:{
        type:number,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    types:{
        type:String,
        requried:true
    },
    discount:{
        type:number,
    },
    rating:{
        type:number,
        requred:true
    },
    discription:{
        type:String,
    },
});

module.exports = mongoose.model('products',productSchema);