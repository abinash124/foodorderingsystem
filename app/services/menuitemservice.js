Menuitemmodel = require('./../models/menuitemmodel');

module.exports.getMenuItems = function(campusname, mealtype){
    return new Promise(function(resolve, reject) {
        Menuitemmodel.getMenuItems(campusname, mealtype).then(
            function(result) {
                resolve(result);
            },
            function(err) {
                reject(err);
            });
    });
};
