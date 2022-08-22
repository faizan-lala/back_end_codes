const express=require('express');

const controller=require('../controller/crude.controller');
const router=express.Router();


router.post('/create',controller.Create);
router.get('/view',controller.View);
router.delete('/delete/:id',controller.Delete);
router.post('/update/:id/',controller.Update);
router.get('/search/:key',controller.Search);

module.exports=router;