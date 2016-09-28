/**
 * Created by titu on 9/27/16.
 */
const express = require('express');
const app = express();
const route = require('./route');
const bodyParser = require('body-parser');

const helper = require('../helper');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

helper.database.initialize();

route.initialize(app);

process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception: ', err);
});

module.exports = app;