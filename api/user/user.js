/**
 * Created by titu on 9/27/16.
 */

const userModel = require('./model');

module.exports = {

    get: (options) => {
        return userModel.findById(options.userId.toString());
    },
    getAll: () => {
        return userModel.find({}, null);
    },
    create: (userData) => {
        return userModel.create(userData);
    },
    update: (userData) => {
        return userModel.findOneAndUpdate({ _id: userData._id }, userData, null);
    },

    remove: (userId) => {
        return userModel.remove({ _id: userId });
    }

};
