/**
 * Created by titu on 9/27/16.
 */

const mongoose = require('mongoose');
const config = require('../config');
const databaseSettings = config.databaseSettings;
const blueBird = require('bluebird');

let initializeDatabase = () => {

    let uriString = databaseSettings.getDatabaseUrl(databaseSettings.getDatabaseConfig());

    mongoose.Promise = blueBird;

    console.log('Connecting to database on: ', uriString);
    mongoose.connect('mongodb://' + uriString, { promiseLibrary: blueBird});

    mongoose.connection.on('connected', function () {
        console.log('Connection with database made successfully!');
    });

    mongoose.connection.on('error', function (error) {
        console.log('Database connection is facing problem: ', error);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Database is now disconnected.');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('SIGINT: Database disconnected.');
            process.exit(0);
        });
    });
};

module.exports = {
    initialize: initializeDatabase
};
