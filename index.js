/**
 * Created by titu on 9/23/16.
 */

const app = require('./app');
const port = process.env.PORT || 3000;
const log = require('./helper/log');

app.listen(port, (err) => {
    if (err) {
        log.err('NodeAPIServer could not started. ', err);
    }
    log.info('NodeAPIServer is running on port: ', port);
});
