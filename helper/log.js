/**
 * Created by titu on 9/30/16.
 */
const bunyan = require('bunyan');
const bunyanFormat = require('bunyan-format');

let formatOut = bunyanFormat({
    outputMode: 'short'
});

let log = bunyan.createLogger({
    name: 'NodeAPIServer',
    stream: formatOut,
    level: 'debug',
    serializers: {
        err: bunyan.stdSerializers.err
    }
});

module.exports = log;

