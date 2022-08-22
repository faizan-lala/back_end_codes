const express=require('express');
const routerUser = express.Router();
const userController=require('../controller/user.controller');

routerUser.post('/SignUp',userController.Signuppostpage)

routerUser.post('/SignIn',userController.Signinpostpage)
module.exports=routerUser;
