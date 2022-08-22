const express=require('express');
const { body } = require('express-validator');
const adminController=require('../controller/admin.controller');
const router=express.Router();

//admin signin - signup
router.post('/signup',body('email').isEmail(),body('password').isLength(4),
adminController.signunpage);

router.post('/signin',body('email').isEmail(),body('password').isLength(4),
adminController.signinpage);



 // admin product

 
const multer = require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }
);
var upload = multer({ storage: storage });

router.post('/add-category',upload.single('categoryImage'),body('categoryName').not().isEmpty(),
adminController.addCategory);

router.get('/category-list',adminController.CategoryList);

router.delete('/delete-category/:id',adminController.deleteCategory)

router.post('/update-category',upload.single('categoryImage'),
 body('categoryName').not().isEmpty(),
 body('categoryId').not().isEmpty(),adminController.updateCategory
);


//


router.post('/add-product',upload.single('productImage')/*,upload.single('productImage_2'),upload.single('productImage_3'),
upload.single('productImage_4')*/,body('productName').not().isEmpty(),body('productPrice').not().isEmpty(),
        body('productQty').not().isEmpty(),body('productDescription').not().isEmpty(),body('productDiscount').not().isEmpty(),
        adminController.addProduct
);

router.post('/update-product',upload.single('productImage'),body('productName').not().isEmpty(),
     body('productPrice').not().isEmpty(),body('productQty').not().isEmpty(),body('productDescription').not().isEmpty(),
     body('productDiscount').not().isEmpty(),body('productId').not().isEmpty(),adminController.updateProduct
);

router.get('/product-list',adminController.productList);
 router.delete('/delete-product/:id',adminController.deleteProduct)

module.exports=router;