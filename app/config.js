var odm = require('mongoose');
var dbname = 'fosdb';
var portnumber = '27017';
var connectionstring = 'mongodb://localhost:' + portnumber + '/' + dbname;

odm.connect(connectionstring);
module.exports = {
    odm,
    connectionstring
};
