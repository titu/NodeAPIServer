/**
 * Created by titu on 9/28/16.
 */
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const middleWare = require('./middleware');
const helper = require('./helper');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

helper.database.initialize();

router.initialize(app);

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception: ', err);
});

app.use(middleWare.errorMiddleware.logErrors);
app.use(middleWare.errorMiddleware.handleErrors);

module.exports = app;
