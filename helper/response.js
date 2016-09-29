/**
 * Created by titu on 9/29/16.
 */

let success = (response, data) => {
    response.status(200).json({
        success: true,
        data: data
    });
};

let failure = (response, err) => {
    let message = [
        'Error in handling this request. ',
        'Please contact system admin if you are continuously seeing this message.'
    ].join('');
    let status = 500;

    if (typeof err === 'object' && err.status) {
        status = err.status;
    }
    if (typeof err === 'object' && err.message) {
        message = err.message;
    }

    response.status(status).json({
        success: false,
        data: message
    });
};

module.exports = {
    success: success,
    failure: failure
};
