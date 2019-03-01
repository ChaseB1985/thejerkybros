
let orm = require('../config/orm.js');
console.log("user model")
let user = {
    all: function(cb){
        orm.all("user", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("user", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.update("user", objColsVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("user", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = user;