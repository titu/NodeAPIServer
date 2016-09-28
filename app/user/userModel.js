/**
 * Created by titu on 9/27/16.
 */

const userModel = require('./userSchema');

module.exports = {

    get: (options, next) => {
        userModel.findById(options.userId.toString(), function (err, user) {
            if (err) {
                next(err);
            }
            else {
                next(null, user);
            }
        });

    },

    getAll: (next) => {

        userModel.find({}, null, function (err, users) {
            if (err) {
                next(err);
            }
            else {
                next(null, users);
            }
        });

    },

    create: (userData, next) => {
        userModel.create(userData, (err, newUser) => {
            if (err) {
                next(err);
            }
            else {
                next(null, newUser);
            }
        });

    },

    update: (userData, next) => {
        userModel.findOneAndUpdate({_id: userData._id}, userData, null, (err, user)=> {
            if (err) {
                next(err);
            }
            else {
                next(null, user);
            }
        });
    },

    remove: (userId, next) => {
        userModel.remove({_id: userId}, (err) => {
            if (err) {
                next(err);
            }
            else {
                next(null);
            }
        });
    }

};