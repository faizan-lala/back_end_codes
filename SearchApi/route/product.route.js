const { application } = require('express');
const express =require('express');
const productController=require('../controller/product.controller');
const router=express.Router();

const multer=require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });

var upload = multer({ storage: storage });


router.post('/add',upload.single('productImage'), productController.Add);
router.get('/search/:key',productController.Search);

module.exports=router;