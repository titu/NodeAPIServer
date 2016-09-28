/**
 * Created by titu on 9/28/16.
 */

let logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};

let handleErrors = (err, req, res) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.status ? err.message : [
            'Error in handling this request. ',
            'Please contact system admin if you are continuously seeing this message.'
        ].join('')
    });
};

module.exports = {
    logErrors: logErrors,
    handleErrors: handleErrors
};
