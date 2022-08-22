const { request, response } = require("express");
const express =require ("express");
const pool =require ("../model/dbconfig");
const Router=express.Router();
Router.get("/",(request,response)=>{
    console.log("for console");
    response.render("index.ejs");
});

Router.get("/about",(request,response)=>{
    response.render("about.ejs");
});

Router.get("/login",(request,response)=>{
    response.render("login.ejs");
});

Router.get("/register",(request,response)=>{
    response.render("register.ejs");
});

Router.post("/register",(request,response)=>{
    console.log("in post");
 pool.getConnection((err,connec)=>{
   console.log(err);
    if(!err){
        console.log("Inside if");
        let sql="insert into user(username,email,password) values(?,?,?)";
        console.log(request.body);
        connec.query(sql,[request.body.username,request.body.email,request.body.password],(error,result)=>{
         if(error){
             console.log(err);
             response.send("<h1>something went wrong!<h1>");
         }
         else{
             response.send("registration success...");
         }
         connec.release();
        });
    }
    else{
      response.send("something went wrog!" + err);
    }

 });
});
module.exports=Router;