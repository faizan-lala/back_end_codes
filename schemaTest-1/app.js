const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const { response } = require('express');
const indexRoute=require('./routs/index.route');
const userRoute=require('./routs/user.route');
const categoryRoute=require('./routs/category.route');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/schematest');

const app=express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/user',userRoute);
app.use('/category',categoryRoute);

app.use(indexRoute);


app.listen(4000,()=>{
    console.log('serving running 4000');
})