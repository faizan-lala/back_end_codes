const { response, request } = require('express');
const productModel=require('../model/product.model');
exports.Add=(request,response)=>{
    productModel.create({
        name:request.body.name,
        price:request.body.price,
        brand:request.body.brand,
        category:request.body.category,
        discount:request.body.discount,
        productImage:request.body.productImage
    }).then(result=>{
     
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json({message:'Opps ! Something went wrong.....'});
    })
}

exports.Search= async(request,response)=>{
   let data=await productModel.find({
       
           "$or":[
               {name: {$regex:request.params.key}},
               {brand: {$regex:request.params.key}},
               {category: {$regex:request.params.key}},
           ]
       
   })
   response.send(data);
}
