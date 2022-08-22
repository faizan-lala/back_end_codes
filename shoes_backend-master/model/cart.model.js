const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    productlist:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            requried:true,
            ref:'products'
        },
        quantity:{
            type:number,
            required:true
        }
    }]
});

module.exports = mongoose.model('carts',cartSchema);