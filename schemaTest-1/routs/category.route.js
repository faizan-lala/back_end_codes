const express=require('express');
const catgoryRouter=express.Router();
const categotyController=require('../controller/category.controller');

catgoryRouter.get('/add-category',categotyController.addCategory);
catgoryRouter.post('/Add-category',categotyController.AddCategory)

module.exports=catgoryRouter;