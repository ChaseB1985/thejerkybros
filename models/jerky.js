let orm = require('../config/orm.js');
console.log("jerky model")
let jerky = {
    all: function(cb){
        orm.all("jerky", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("jerky", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.update("jerky", objColsVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("jerky", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = jerky;