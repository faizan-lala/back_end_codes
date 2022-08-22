const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    gender:[{
        name:{
            type:String,
        },
        image:{
            type:String,
            required:true
        },
    }],
    discount:[{
        type:String,
    }],
    color:[{
        type:String,
    }],
    size:[{
        type:String,
    }],
    brands:[{
        name:{
            type:String,
        },
        image:{
            type:String,
        }
    }],
    types:[{
        type:String,
    }]
});

module.exports = mongoose.model('categories',categorySchema);