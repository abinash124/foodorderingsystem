Menuitemservice = require('./../services/menuitemservice');

module.exports.getMenuItems = function(req, res){
    Menuitemservice.getMenuItems(req.query.campusname, req.query.mealtype).then(
        function(result) {
            res.status(200).send(result);
        },
        function(err) {
            res.status(400).send(err);
        });
};
