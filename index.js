/**
 * Created by titu on 9/23/16.
 */

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log('NodeAPIServer could not started. ', err);
    }
    return console.log('NodeAPIServer is running on port: ', port);
});


