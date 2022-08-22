const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const bodyParser=require('body-parser');
const router=require('./router/crud.route');
mongoose.connect('mongodb://localhost:27017/worshipapi',(err)=>{
    if(err)
      console.log(err);
    else{
        console.log('connected');
    }  
})



const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/crud',router);

app.listen(3000,()=>{
    console.log('server started.....');
})