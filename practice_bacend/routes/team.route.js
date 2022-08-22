const express=require('express');
const teamController=require('../controller/team.controller');
const router=express.Router();

router.post('/add',teamController.Add);
router.get('/view',teamController.View);
router.delete('/delete/:id',teamController.Delete);
router.post('/update/:id',teamController.Update)
module.exports=router;