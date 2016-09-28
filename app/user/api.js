/**
 * Created by titu on 9/27/16.
 */
const userModel = require('./userModel');

module.exports = {

    get: (request, response) => {
        userModel.get({userId: request.params.id}, function (err, user) {
            if (err) {
                console.log(' 500 : ', err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            }
            else {
                response.json({
                    "status": 200,
                    "user": user
                });
            }
        });
    },
    getAll: (request, response) => {
        userModel.getAll(function (err, users) {
            if (err) {
                console.log(' 500 : ', err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            }
            else {
                response.json({
                    "status": 200,
                    "users": users
                })
            }
        });
    },
    create: (request, response) => {
        userModel.create(request.body, (err, newUser) => {
            if (err) {
                console.log(' 500 : ', err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            }
            else {
                response.json({
                    "status": 200,
                    "user": newUser
                });
            }

        });
    },
    update: (request, response) => {
        userModel.update(request.body, (err, user) => {
            if (err) {
                console.log(' 500 : ', err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            }
            else {
                response.json({
                    "status": 200,
                    "user": user
                });
            }

        });
    },
    remove: (request, response) => {
        userModel.remove(request.body, (err) => {
            if (err) {
                console.log(' 500 : ', err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            }
            else {
                response.json({
                    "status": 200
                });
            }

        });
    }
};
