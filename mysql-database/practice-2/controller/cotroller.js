const { request, response } = require("express");

exports.homePage=(request,response)=>{
    response.render('home.ejs');
}

exports.loginPage=(request,response)=>{
    response.render('login.ejs');
}

exports.registerPage=(request,response)=>{
    response.render('register.ejs');
}

exports.productPage=(request,response)=>{
    response.render('product.ejs');
}

exports.signoutPage=(request,response)=>{
    response.render('signout.ejs');
}