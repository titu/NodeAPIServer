/**
 * Created by titu on 10/15/16.
 */

const moment = require('moment');
const validate = require('validate.js');
const globalConfig = require('../../config/global');

validate.extend(validate.validators.datetime, {
    // The value is guaranteed not to be null or undefined but otherwise it
    // could be anything.
    parse: (value) => {
        return +moment.utc(value);
    },
    // Input is a unix timestamp
    format: (value, options) => {
        var format = options.dateOnly ? globalConfig.dateFormat : globalConfig.dateTimeFormat;
        return moment.utc(value).format(format);
    }
});

module.exports = {
    constraints: {
        name: {
            presence: true
        },
        'name.first': {
            presence: true,
            length: {
                minimum: 3,
                maximum: 20
            }
        },
        'name.last': {
            presence: true,
            length: {
                minimum: 3,
                maximum: 20
            }
        },
        email: {
            presence: true,
            email: true
        },
        birthDate: {
            presence: true,
            date: {
                latest: moment().subtract(18, 'years'),
                message: '^You must be at least 18 years old to start using this service.'
            }
        },
        password: {
            presence: true,
            length: {
                minimum: 5
            }
        },
        confirmPassword: {
            presence: true,
            equality: {
                attribute: 'password',
                message: '^The passwords does not match'
            }
        }
    }
};
