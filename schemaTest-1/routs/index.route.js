const express=require('express');
const routerIndex = express.Router();
const indexController=require('../controller/index.controller');

routerIndex.get('/',indexController.homePage);
routerIndex.get('/signin',indexController.signinPage);
routerIndex.get('/signup',indexController.signupPage);

module.exports=routerIndex;
