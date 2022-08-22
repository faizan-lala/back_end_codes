const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const mongoose=require('mongoose');
// const { json } = require('body-parser');  
const userRoute=require('./routes/user.route');
const { request } = require('http');
const { response } = require('express');
const port=process.env.PORT || 3000;
const app=express();
mongoose.connect('mongodb+srv://faizankhan:786786@cluster0.5nhsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{
   console.log('databasse connected.......');

}).catch((err)=>{
    console.log(err);
});
 const cors=require('cors');
 app.use(cors());

 app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/user',userRoute);


app.listen(port,()=>{
  console.log("Server started "+ port);
})