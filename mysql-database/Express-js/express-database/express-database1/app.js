const express = require ("express");
const indexRouter=require ("./routes/index.route");
const path = require ("path");
const bodyParser=require("body-parser");
const { ppid } =require("process");
const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended :false}));

const staticFilePath=path.join(__dirname,"public");
app.use(express.static(staticFilePath));

// app.get('/',(request,response)=>{
//     response.send("hi i am faizan");
// });
app.use(indexRouter);
app.listen(3000,(request,response)=>{
  console.log("for console")
});

