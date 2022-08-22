const { request, response } = require("express");

exports.homePage=(request,response)=>{
    response.render('index.ejs');
}

exports.signinPage=(request,response)=>{
    response.render('signin.ejs');
}

exports.signupPage=(request,response)=>{
    response.render('signup.ejs');
}