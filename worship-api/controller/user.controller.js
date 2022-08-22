const { request, response } = require("express");
const { validationResult } = require('express-validator');
const user = require('../model/user.model');

exports.signunpage = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({
            errors: errors.array()
        });

    }
    let email = request.body.email;
    let password = request.body.password;

    user.create({
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
    user.findOne({
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
