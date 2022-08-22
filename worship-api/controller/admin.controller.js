const { request, response } = require("express");
const { validationResult } = require('express-validator');
const admin = require('../model/admin.model');
const Category = require('../model/category.model');
const Product = require('../model/product.model');
//admin signin signup
exports.signunpage = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({
            errors: errors.array()
        });

    }
    let email = request.body.email;
    let password = request.body.password;

    admin.create({
        email: email,
        password: password
    })
        .then(result => {
            console.log(result);
            return response.status(201).json(result);
        }).catch(error => {
            console.log(error);
        });
}


exports.signinpage = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        console.log('hii');
        return response.status(403).json({
            errors: errors.array()
        });
    }

    /*let email = request.body.email;
    let password = request.body.password;
*/
    admin.findOne({
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        if (result)

            return response.status(200).json(result);

        else

            return response.status(404).json({ message: 'Invalid user' })

    })
        .catch(err => {
            return response.status(500).json({ message: 'Oops something went wrong' });
        });


}

//admin category

exports.addCategory = (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty)
        return response.status(400).json({ errors: errors.array() });

    Category.create({
        categoryName: request.body.categoryName,
        categoryImageUrl: "http://localhost:4000/images/" + request.file.filename
    }).then(result => {
        return response.status(201).json(result);
    }).catch(err => {
        return response.status(403).json({ message: "Opps!wrong" });
    });

}

exports.CategoryList = (request, response) => {
    Category.find().then(results => {
        return response.status(200).json(results);
    }).catch(err => {
        return response.status(500).json({ message: "Oops!Something went wrong" });
    });
}

exports.deleteCategory = (request, response) => {
    Category.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount)
                return response.status(202).json({ message: 'success' });

            else
                return response.status(204).json({ message: 'not delete' });
        }).catch(err => {
            return response.status(500).json({ message: 'Oops!Something went wrong' });
        })
}

exports.updateCategory = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    Category.updateOne({ _id: request.body.categoryId },
        {
            $set: {

                categoryName: request.body.categoryName,
                categoryImageUrl: "http://localhost:4000/images/" + request.file.filename
            }
        }).then(result => {
            console.log(result);
            if (result.modifiedCount)
                return response.status(200).json({ message: 'success' });
            else
                return response.status(404).json({ message: 'record not found' })
        }).catch(err => {
            return response.status(500).json({ message: 'Something went wrong..' });
        });

}

//admin item



exports.productList = (request, response) => {
    Product.find().then(results => {
        return response.status(200).json(results);
    }).catch(err => {
        return response.status(500).json({ message: "Opps ! Something went wrong" });
    });
}

exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }).then(result => {
        if (result.deletedCount)
            return response.status(202).json({ message: 'deleted successfully' });
        else
            return response.status(204).json({ message: 'not deleted' })
    }).catch(err => {
        return response.status(500).json({ message: 'Opps!Something went wrong' });
    })
}

exports.addProduct = (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.json() });

    Product.create({
        productImage: "http://localhost:4000/images/" + request.file.filename,
        /* productImage_2:"http://localhost:4000/images/"+request.file.filename,
         productImage_3:"http://localhost:4000/images/"+request.file.filename,
         productImage_4:"http://localhost:4000/images/"+request.file.filename,*/
        productName: request.body.productName,
        productPrice: request.body.productPrice,
        productQty: request.body.productQty,
        productDescription: request.body.productDescription,
        productDiscount: request.body.productDiscount,
        categoryId: request.body.id
    }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        return response.status(403).json({ message: 'Oops!Something went wrong' });
    });
}

exports.updateProduct = (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.json() })

    Product.updateOne({ _id: request.body.productId },
        {
            $set: {
                productName: request.body.productName,
                productImage: "http://localhost:4000/images/" + request.file.filename,
                productPrice: request.body.productPrice,
                productQty: request.body.productQty,
                productDescription: request.body.productDescription,
                productDiscount: request.body.productDiscount

            }
        }).then(result => {
            console.log(result);
            if (result.modifiedCount)
                return response.status(200).json({ message: 'updated successfully' });
            else
                return response.status(404).json({ message: 'updated not successfully' });
        }).catch(err => {
            return response.status(500).json({ message: 'Opps!Something went wrong' });
        });
}