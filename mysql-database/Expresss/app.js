const express= require('express');
const app=express();
const router=express.Router();
const indexroute=require('./routes/index.route');
const path=require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : false}));

app.use(indexroute);
app.set('view engine','ejs');
const staticFile=path.join(__dirname,"public");
app.use(express.static(staticFile));
app.listen(4000,()=>{
  console.log('server is running at port no.4000');
});


  module.exports=router;