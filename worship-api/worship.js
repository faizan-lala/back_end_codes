const express=require('express');
const adminRoute=require('./routes/admin.route');
//const categoryRoute=require('./route/category.route');
//const cartRoute=require('./route/cart.route');
//const productRoute=require('./route/product.route');
const userRoute=require('./routes/user.route');
////const orderRoute=require('./route/order.route');
const bodyParser=require('body-parser');
const path =require('path');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/worshipapi');
const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/admin',adminRoute);
app.use('/api/user',userRoute);
//app.use('/api/category',categoryRoute);
//app.use('/api/product',productRoute);
//app.use('/api/cart',cartRoute);
//app.use('/api/order',orderRoute);
app.listen(5000,()=>{
    console.log('server is running');
})