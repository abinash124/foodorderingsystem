var config = require('./../config');
var appconfig = require('./../appconfig');

var Promise = appconfig.Promise;

var mongoose = config.odm;

var Schema = mongoose.Schema;
var menuitemschema = Schema(
    {
        campusename: String,
        vendorID: String,
        mealtype: String,
        meal: Schema.Types.Mixed,
        price: Number,
        servicetime: Number
    }
);

var Menuitem = module.exports = mongoose.model('menuitem', menuitemschema);

module.exports.getMenuItems = function(campusname, mealtype) {
    return new Promise(function(resolve, reject) {
        Menuitem.find({campusname: campusname, mealtype: mealtype}, function(err, data){            
            if(err)
                reject(err);
            resolve(data);
        });        
    });
};


