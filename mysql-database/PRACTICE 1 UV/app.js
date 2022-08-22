const express=require('express');
const bodyparser=require('body-parser');
const routeExpo=require('./Route/route');
const session=require('express-session');

const app=express();

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.use(session({
    secret:'sjbdfkldsjfkjdbsfjdsn'
}));

app.use(routeExpo);

app.listen(3000,()=>{
    console.log('server running');
})