/**
 * Created by titu on 9/28/16.
 */
const log = require('../helper').log;

let logErrors = (err, req, res, next) => {
    log.error(
        'Error in handling request'
        , { originalUrl: req.originalUrl }
        , { originalMethod: req.originalMethod }
        , { error: err }
    );
    next(err);
};

let handleErrors = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: [
            'Error in handling this request. ',
            'Please contact system admin if you are continuously seeing this message.'
        ].join('')
    });
};

module.exports = {
    logErrors: logErrors,
    handleErrors: handleErrors
};
