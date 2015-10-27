"use strict"

let mongoose = require('mongoose');
let logger = require('../common/logger')(module);
let config = require('../server/config');

mongoose.connect(config.get('dbhost:uri'));

let db = mongoose.connection;

db.on('error', (err) => logger.error('connection error:', err.message));
db.once('open', () => logger.info("Connected to DB!"));

let Schema = mongoose.Schema;

// Schemas
let Person = new Schema({
    Name: { type: String, required: true },
    Wins: { type: Array, required: false }
});

let PersonModel = mongoose.model('Person', Person);

module.exports.PersonModel = PersonModel;
