/**
 * Created by titu on 9/27/16.
 */
const userModel = require('./userModel');
const responseHelper = require('../../helper').response;

module.exports = {

    get: (request, response, next) => {
        userModel.get({ userId: request.params.id })
            .then((user) => {
                responseHelper.success(response, user);
            })
            .catch(next);
    },
    getAll: (request, response, next) => {
        userModel.getAll()
            .then((users) => {
                responseHelper.success(response, users);
            })
            .catch(next);
    },
    create: (request, response, next) => {
        userModel.create(request.body)
            .then((newUser) => {
                responseHelper.success(response, newUser);
            })
            .catch(next);
    },
    update: (request, response, next) => {
        userModel.update(request.body)
            .then((user) => {
                responseHelper.success(response, user);
            })
            .catch(next);
    },
    remove: (request, response, next) => {
        userModel.remove(request.body)
            .then(() => {
                responseHelper.success(response, true);
            })
            .catch(next);
    }
};
