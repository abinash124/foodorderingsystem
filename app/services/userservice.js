Usermodel = require('./../models/usermodel');

module.exports.userExists = function(mid, password){
    return new Promise(function(resolve, reject) {
        Usermodel.userExists(mid, password).then(
            function(result) {
                resolve(result);
            },
            function(err) {
                reject(err);
            });
    });
};

module.exports.addUser = function(userdetails){
    return new Promise(function(resolve, reject) {
        Usermodel.addUser(userdetails).then(
            function(result) {
                resolve(result);
            },
            function(err) {
                reject(err);
            });
    });
};


