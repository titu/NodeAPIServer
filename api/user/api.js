/**
 * Created by titu on 9/27/16.
 */
const userModel = require('./userModel');

module.exports = {

    get: (request, response, next) => {
        userModel.get({ userId: request.params.id })
            .then((user) => {
                response.json({
                    status: 200,
                    user: user
                });
            })
            .catch(next);
    },
    getAll: (request, response, next) => {
        userModel.getAll()
            .then((users) => {
                response.json({
                    status: 200,
                    users: users
                });
            })
            .catch(next);
    },
    create: (request, response, next) => {
        userModel.create(request.body)
            .then((newUser) => {
                response.json({
                    status: 200,
                    user: newUser
                });
            })
            .catch(next);
    },
    update: (request, response, next) => {
        userModel.update(request.body)
            .then((user) => {
                response.json({
                    status: 200,
                    user: user
                });
            })
            .catch(next);
    },
    remove: (request, response, next) => {
        userModel.remove(request.body)
            .then(() => {
                response.json({
                    status: 200
                });
            })
            .catch(next);
    }
};
