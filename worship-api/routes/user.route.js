const express=require('express');
const { body } = require('express-validator');
const userController=require('../controller/user.controller');
const userRouter=express.Router();

userRouter.post('/signup',body('email').isEmail(),body('password').isLength(4),
userController.signunpage);

userRouter.post('/signin',body('email').isEmail(),body('password').isLength(4),
userController.signinpage);

module.exports=userRouter;

 