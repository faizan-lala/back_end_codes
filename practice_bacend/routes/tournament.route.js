const express=require('express');
const tournaController=require('../controller/tournament.controller');
const router=express.Router();

router.post('/add',tournaController.Add);
router.get('/view',tournaController.View);
router.delete('/delete',tournaController.Delete);
router.post('/update',tournaController.Update);
module.exports=router;