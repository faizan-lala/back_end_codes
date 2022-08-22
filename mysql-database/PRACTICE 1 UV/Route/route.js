const express=require('express');
const routeControl=require('../Controller/routecontrol');
const route=express.Router();
const auth=require('../Middleware/auth');
const multer=require('multer');

const upload=multer({dest:'Public/Images'});


route.get('/',routeControl.Homepage);
route.get('/register',routeControl.Registerpage);
route.get('/login',routeControl.Loginpage);
route.get('/product',auth.isAuth,routeControl.Productpage);
route.get('/signout',routeControl.Signoutpage);
route.post('/registerU',routeControl.ResgisterPost);
route.post('/loginU',routeControl.LoginPost);
route.post('/addproduct',upload.single('image'),routeControl.ProductPost);


module.exports=route;