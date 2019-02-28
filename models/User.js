// const express = require("express");
// const router = express.Router();
// //const db = require("../models");




// router.get("/api/user", function(req, res){
//     //res.send("Get Users")
//     res.send('hello world'),
//     console.log("Get User");
// });
// console.log("Get User");

// router.post("/api/user", function(req, res){
//     res.send("Post Users"),
//     res.send('hello world')
// })

// router.put("/api/user/:id", function(req, res){
//     res.send("Update Users")
// })

// router.delete("/api/user/:id", function(req, res){
//     res.send("Delete Users")
// })
// // router.get("/login", function(req, res){
// //     res.send("login")
// // })


// module.exports = router;


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