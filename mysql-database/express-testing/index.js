const { response } = require("express");
const express = require("express");
const { request } = require("http");
const { dirname } = require("path");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.get('/',(request,response)=>{
   response.send("home page");
});
 app.get('/about',(request,response)=>{
     response.sendFile(path.join(__dirname,'index.html'));
 });
 app.listen(4000,(Request,response)=>{
   console.log("server send request on port no. 4000");
 });