const User = require("../model/user");
exports.home=(request, response) => {
    response.render("home.ejs");
}

exports.about=(request, response) => {
    response.render("about.ejs");
}

exports.login=(request, response) => {
    response.render("login.ejs");
}

exports.register=(request, response) => {
    response.render("register.ejs");
}

exports.contact=(request, response) => {
    response.render("contact.ejs");
}

exports.loginPost=(request,response)=>{
    let user = new User();
    user.email = request.body.email;
    user.password = request.body.password;

    user.checkUser()
    .then((result)=>{
        if(result.length>0)
            response.send("Login Successfull");
        else
            response.send("Invalid username or passowrd");
    })
    .catch(err=>{
        response.send("Something went wrong");
    })
}

exports.registerPost=(request,response)=>{
    let user = new User();
    user.username = request.body.username;
    user.email=request.body.email;
    user.password=request.body.password;

    user.save()
    .then((result)=>{
        response.send("Registration Success....");
    })
    .catch((err)=>{
        response.send("Registration Failed.....");
        console.log(err);
    })
}