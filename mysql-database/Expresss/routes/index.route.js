const express = require('express');
const app = express();
const router = express.Router();
const indexroute=require('../controller/index.controller');


router.get('/',indexroute.home);

router.get('/about', indexroute.about);

router.get('/login', indexroute.login);

router.get('/register', indexroute.register);

router.get('/contact',indexroute.contact);

router.post('/login',indexroute.loginPost);

router.post('/register',indexroute.registerPost);



module.exports = router;
