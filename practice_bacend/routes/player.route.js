const express = require('express');
const playerController = require('../controller/player.controller');
const router = express.Router();
router.post('/add', playerController.Add);
router.get('/view', playerController.View);
router.delete('/delete/:id', playerController.Delete);
router.post('/update/:id', playerController.Update);
router.post('/request/:playerId', playerController.Request);
router.post
module.exports = router;