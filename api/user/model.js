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
        last: { type: String, trim: true }
    },
    email: {
        type: String,
        required: true
    },
    birthDate: { type: Date },
    registeredOn: {
        type: Date,
        default: Date.now
    },
    password: { type: String },
    confirmPassword: { type: String },
    role: {
        type: String,
        required: true,
        enum: roleEnum,
        default: 'USER'
    }
});

module.exports = mongoose.model('User', userSchema);
