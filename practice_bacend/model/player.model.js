const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const playerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
   requested:[{
       teamId:{
           type:Schema.Types.ObjectId,
           ref:'teams'
       },
       tournamentId:{
           type:Schema.Types.ObjectId,
           ref:'tournaments'
       }
   }],

   history:[{
       tournamentId:Schema.Types.ObjectId,
    //    ref:'tournaments'
   }],
   date: {
    type: Date,
    default: Date.now()
}
});

module.exports=mongoose.model('players',playerSchema);






















// let cart=prodcctLst.push(product)
// cartModel.find().populate("productList")
// let user = request.body.userId;
//  let product = request.body.productId;
//  let cart = await cartModel.findOne({userId : user});

//  cart.productList.push(product);