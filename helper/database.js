/**
 * Created by titu on 9/27/16.
 */

const mongoose = require('mongoose');
const config = require('../config');
const databaseSettings = config.databaseSettings;
const blueBird = require('bluebird');
const log = require('./log');

let initializeDatabase = () => {
    let uriString = databaseSettings.getDatabaseUrl(databaseSettings.getDatabaseConfig());

    mongoose.Promise = blueBird;

    log.info('Connecting to database on: ', uriString);
    mongoose.connect('mongodb://' + uriString, { promiseLibrary: blueBird });

    mongoose.connection.on('connected', () => {
        log.info('Connection with database made successfully!');
    });

    mongoose.connection.on('error', (error) => {
        log.error('Database connection is facing problem: ', error);
    });

    mongoose.connection.on('disconnected', () => {
        log.warn('Database is now disconnected.');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            log.warn('SIGINT: Database disconnected.');
            process.exit(0);
        });
    });
};

module.exports = {
    initialize: initializeDatabase
};
