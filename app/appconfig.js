var express = require('express');
var bodyparser = require('body-parser');
var Promise = require('bluebird');

var portnumber = 4000;

//CORS middleware
var appcors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
};

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(appcors);

module.exports = {
    express,
    app,
    portnumber,
    Promise
};