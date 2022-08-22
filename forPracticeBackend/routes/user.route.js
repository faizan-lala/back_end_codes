const express=require('express');
const userController=require('../controller/user.controller');
const router=express.Router();

router.post('/signup',userController.SignUp);
router.post('/signin',userController.SignIn);

module.exports=router;