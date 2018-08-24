Userservice = require('./../services/userservice');

module.exports.userExists = function(req, res){
       var mid = req.body.mid;
       var password = req.body.password;
    
        Userservice.userExists(mid, password).then(
            function(result) {
                res.status(200).send(result);
            },
            function(err) {
                res.status(401).send(err);
        });
};

module.exports.addUser = function(req, res){
     var userdetails = {
                            name: req.body.name,
                            email: req.body.email,
                            phonenumber: req.body.phonenumber,
                            mid: req.body.mid,
                            password: req.body.password
                        };
     Userservice.addUser(userdetails).then(
        function(result) {
            res.status(200).send(result);
        },
        function(err) {
            res.status(400).send(err);
        });
};


