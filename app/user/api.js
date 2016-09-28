/**
 * Created by titu on 9/27/16.
 */
const userModel = require('./userModel');

module.exports = {

    get: (request, response) => {
        userModel.get({userId: request.params.id})
            .then((user) => {
                response.json({
                    "status": 200,
                    "user": user
                });
            })
            .catch((err) => {
                console.log(err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            });
    },
    getAll: (request, response) => {
        userModel.getAll()
            .then((users) => {
                response.json({
                    "status": 200,
                    "users": users
                });
            })
            .catch((err) => {
                console.log(err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            });
    },
    create: (request, response) => {
        userModel.create(request.body)
            .then((newUser) => {
                response.json({
                    "status": 200,
                    "user": newUser
                });
            })
            .catch((err) => {
                console.log(err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            });
    },
    update: (request, response) => {
        userModel.update(request.body)
            .then((user) => {
                response.json({
                    "status": 200,
                    "user": user
                });
            })
            .catch((err) => {
                console.log(err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            });
    },
    remove: (request, response) => {
        userModel.remove(request.body)
            .then(() => {
                response.json({
                    "status": 200
                });
            })
            .catch((err) => {
                console.log(err);
                response.json({
                    "status": 500,
                    "message": "Something went wrong!"
                });
            });
    }
};
