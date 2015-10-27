"use strict"

var express = require('express');
var path = require('path');
var _paths = require('../common/paths');
var logger = require('../common/logger')(module);
var favicon = require('express-favicon');
var bodyParser = require('body-parser');
var upload = require('multer')();
var config = require('../server/config');
var personRoutes = require('../server/routes');
var app = express();

app.use(favicon(path.join(_paths.assets, "boat.svg")));
app.use(express.static(_paths.public));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//message routes
app.use('/api/persons', personRoutes);

//error 404
app.use(function(req, res, next){
    res.status(404);
    logger.debug('Not found URL: %s', req.url);
    res.send({ error: 'Not found' });
    return;
});

//error 500
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    logger.error('Internal error(%d): %s', res.statusCode, err.message);
    res.send({ error: err.message });
    return;
});

app.listen(config.get('port'), logger.info(`Express server listening on port ${config.get('port')}`));
