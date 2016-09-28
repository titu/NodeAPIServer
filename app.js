/**
 * Created by titu on 9/28/16.
 */
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

const helper = require('./helper');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

helper.database.initialize();

router.initialize(app);

process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception: ', err);
});

module.exports = app;