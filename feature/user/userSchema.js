/**
 * Created by titu on 9/27/16.
 */
const mongoose = require('mongoose');

let roleEnum = [
    'USER',
    'ADMIN'
];

let userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: {type: String, trim: true}
    },
    email: {
        type: String,
        required: true
    },
    age: {type: Number, min: 0},
    registeredOn: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        required: true,
        enum: roleEnum
    }
});

module.exports = mongoose.model('User', userSchema);