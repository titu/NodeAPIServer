/**
 * Created by titu on 9/28/16.
 */
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const middleWare = require('./middleware');
const helper = require('./helper');
const log = helper.log;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(middleWare.request.log);
app.use(methodOverride());

helper.database.initialize();

router.initialize(app);

process.on('uncaughtException', (err) => {
    log.fatal('Uncaught Exception: ', err);
});

app.use(middleWare.error.log);
app.use(middleWare.error.handle);

module.exports = app;
