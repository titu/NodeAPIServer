/**
 * Created by titu on 9/27/16.
 */
const user = require('./user');
const helper = require('../../helper');
const responseHelper = helper.response;
const validate = require('validate.js');
const userValidation = require('./constraints');

module.exports = {

    get: (request, response, next) => {
        user.get({ userId: request.params.id })
            .then((foundUser) => {
                responseHelper.success(response, foundUser);
            })
            .catch(next);
    },
    getAll: (request, response, next) => {
        user.getAll()
            .then((allUsers) => {
                responseHelper.success(response, allUsers);
            })
            .catch(next);
    },
    create: (request, response, next) => {
        let userData = request.body;
        let validation = validate(userData, userValidation.constraints);

        if (validation) {
            responseHelper.failure(response, {
                status: 400,
                message: validation
            });
            return;
        }
        user.create(userData)
            .then((newUser) => {
                responseHelper.success(response, newUser);
            })
            .catch(next);
    },
    update: (request, response, next) => {
        user.update(request.body)
            .then((updatedUser) => {
                responseHelper.success(response, updatedUser);
            })
            .catch(next);
    },
    remove: (request, response, next) => {
        user.remove(request.body)
            .then(() => {
                responseHelper.success(response, true);
            })
            .catch(next);
    }
};
