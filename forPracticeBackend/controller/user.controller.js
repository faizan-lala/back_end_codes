const { request } = require('express');
const token = require('../middleware/token.verification');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
exports.SignUp = (request, response) => {
    userModel.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        mobile: request.body.mobile
    }).then(result => {
        console.log(result);
        return response.status(200).json({result:result});
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ message: 'Something went wrong' });
    })
};


exports.SignIn = (request, response) => {
    userModel.findOne({
        email: request.body.email,
        password: request.body.password
    }).then((result) => {
        if (result) {
            let payload = { subject: result._id };
            let token = jwt.sign(payload,'InfoBeansFoundation');
            return response.status(200).json({
                status: 'login succes',
                current_user: result,
                token: token
            })
        }
        else
            return response.status(404).json({ message: 'Invalid user' })
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ message: 'Oops something went wrong' });
    })

}