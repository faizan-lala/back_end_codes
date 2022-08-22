const { request, response } = require('express');
const User=require('../model/usermodel');
exports.Signuppostpage=(request,response)=>{
    let a=request.body.name;
    let b=request.body.email;
    let c=request.body.password;

    let u=new User({
       name:a,
       email:b,
       password:c*1 
    });

    u.save().then(result=>{
        response.render('signin.ejs');
    }).catch(error=>{
        console.log(error);
    });
}

exports.Signinpostpage=(request,response)=>{
    let email=request.body.email;
    let password=request.body.password;

    User.findOne({email:email,password:password})
    .then(result=>{
        response.send('login success');
    }).catch(error=>{
        console.log(error);
    })

}