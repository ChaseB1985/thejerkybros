

//var express = require("express");

//var router = express.Router();

// Import the model (cat.js) to use its database functions.
//var user = require("../models/User");

// router.get('/register', function(req, res){
//   user.all(function(data) {
//     var hbsObject = {
//       user: data
//     };
//     console.log(hbsObject);
//     res.render('login', hbsObject);
//     console.log(data)
//   });
// }); //end of router
    //var today = new Date();
//     var users={
//         "username":req.body.username,
//         "email":req.body.email,
//         "password":req.body.password,
//        // "created_at":today,
//         //"updated_at":today
//     }
//     connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
//       if (error) {
//         res.json({
//             status:false,
//             message:'there are some error with query'
//         })
//       }else{
//           res.json({
//             status:true,
//             data:results,
//             message:'user registered sucessfully'
//         })
//       }
//     });

// module.exports = router;
const express = require("express");
const router = express.Router();
const user = require('../models/User');
//const db = require("../models");
/////////////


///////////////////
// router.get("/register", function(req, res){
//     //res.send("Get Users")
//     // router.get('/register', function(req, res){
//   user.all(function(data) {
//     var hbsObjectUser = {
//       user: data,
//       // "username":req.body.username,
//       //  email:req.body.email,
//       //  password:req.body.password,

//     };
//     //console.log(hbsObject);
//     res.render('login', hbsObjectUser);
//     //console.log(hbsObjectUser);
//     console.log(data, "data line");
    
//   });
//     //res.send('hello world'),
//     console.log("Get User");
// });
console.log("Get User");

// router.post("/api/user", function(req, res){
    
//     user.create([
//       'username', 'email', 'password'
//     ],[
//       req.body.username, req.body.email, req.body.password
//     ], function(result){
//       //res.json({ id: result.insertId });
//       res.render("profile", {
//         username: req.body.username,
//         email: req.body.email
//       });
//       console.log(req.body.username, "username");
//       console.log(result, "results");
      

//     });
// });
router.post("/api/user", function(req, res){
    
  user.create([
    'username', 'email', 'password'
  ],[
    req.body.username, req.body.email, req.body.password
  ], function(result){
    //res.json({ id: result.insertId });
    res.render("profile", {
      username: req.body.username,
      email: req.body.email
    });
    console.log(req.body.username, "username");
    console.log(result, "results");
    

  });
});

router.put("/api/user/:id", function(req, res){
    // res.send("Update Users")
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    user.update({
      username: req.body.username
    }, condition, function(result){
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      } 
    });
});

router.delete("/api/user/:id", function(req, res){
    res.send("Delete Users")
})
// router.get("/login", function(req, res){
//     res.send("login")
// })


module.exports = router;