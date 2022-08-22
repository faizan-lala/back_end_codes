const { response } = require('express');
const express=require('express');
const app=express();
 const routeExpo=require('./routes/route');
  const bodyParser=require('body-parser');

 app.set('view engine','ejs');
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(routeExpo);
/*app.get("/",(req,res)=>{
    res.send('helo');
})*/
app.listen(3000,()=>{
    console.log("server is running");
})