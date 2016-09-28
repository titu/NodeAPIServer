/**
 * Created by titu on 9/27/16.
 */

const userApi = require('./api');

let initUser = (app) => {
    app.get('/users', userApi.getAll);
    app.get('/user/:id', userApi.get);
    app.post('/user', userApi.create);
    app.put('/user', userApi.update);
    app.delete('/user', userApi.remove);
};

module.exports = initUser;