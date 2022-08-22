const express = require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');
const productRoute=require('./route/product.route');
const cartRoute=require('./route/cart.route');
mongoose.connect('mongodb+srv://root:root@cluster0.fjcyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
const port=process.env.PORT || 3000;
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/product',productRoute);
app.use('/cart',cartRoute);

app.listen(port,()=>{
    console.log('server is running');
});


