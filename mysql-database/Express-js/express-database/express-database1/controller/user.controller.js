const Product=require("../model/product");
exports.addProductPage=(requset,response,next)=>{
    response.render("user-admin/add-product",{
        username:""
    });
};
