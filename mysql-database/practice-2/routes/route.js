const express=require('express');
const router=express.Router();
const routeControl=require('../controller/cotroller');

router.get('/',routeControl.homePage);
router.get('/login',routeControl.loginPage);
router.get('/register',routeControl.registerPage);
router.get('/product',routeControl.productPage);
router.get('/signout',routeControl.signoutPage);

module.exports=router;