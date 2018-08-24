var appconfig = require('./app/appconfig');
var router = require('./app/routes');

var app = appconfig.app;
var portnum = appconfig.portnumber;

app.use('/', router);
app.listen(portnum, function(){
    console.log('server running at port ' + portnum + '...');
});