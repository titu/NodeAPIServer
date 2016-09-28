/**
 * Created by titu on 9/27/16.
 */

let getDatabaseConfig = () => {
    return {
        name: 'NodeAPIServer',
        host: '127.0.0.1',
        port: 27017
    }
};
let getDatabaseUrl = (config) => {
    return process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        config.host + ':' + config.port + '/' + config.name;
};

module.exports = {
    getDatabaseConfig: getDatabaseConfig,
    getDatabaseUrl: getDatabaseUrl
};