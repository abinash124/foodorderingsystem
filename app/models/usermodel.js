var config = require('./../config');
var appconfig = require('./../appconfig');

var Promise = appconfig.Promise;

var mongoose = config.odm;

var Schema = mongoose.Schema;
var userschema = Schema({
    name: String,
    email: String,
    phonenumber: String,
    mid: String,
    password: String
});

var User = module.exports = mongoose.model('user', userschema); 

module.exports.userExists = function(mid, password){
    return new Promise(function(resolve, reject) {
        User.findOne({mid: mid, password: password}, function(err, data){
            if(err || data == null)
                reject(false);
            resolve(true);
        });
    });
};

module.exports.addUser = function(userdetails) {
    return new Promise(function(resolve, reject) {
        user = new User({
            name: userdetails.name,
            email: userdetails.email,
            phonenumber: userdetails.phonenumber,
            mid: userdetails.mid,
            password: userdetails.password
        });
        user.save(function(err){
            if(err)
                reject(false);
            resolve(true);
        });
    });
};

