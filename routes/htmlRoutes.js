let connection = require('../config/connection');
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
console.log('html rout connected');
var path = require('path');

module.exports = function(app) {

    
    app.get('/index', function(req, res) {
        res.sendFile(path.join(__dirname + '/./public/index.html'));
    });
    // app.post('/login', function(req, res){
    //     var person = {
    //         email: req.body.email
    //     };
    // connection.query
    // })
    app.get("/", function(req, res){
        // Find count of users in DB
        var q = "SELECT COUNT(*) AS count FROM users";
        connection.query(q, function(err, results){
            if(err) throw err;
            var count = results[0].count; 
            res.render("home", {count: count});
        });
    });
    
    app.post("/register", function(req, res){
        var person = {
            email: req.body.email
        };
        connection.query('INSERT INTO users SET ?', person, function(err, result) {
            if (err) throw err;
            res.redirect("/");
        });
    });
    app.get('/order', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/order.html'));
    });
    
    // USE route returns home.html for any undefined GET routes.
    // app.use(function (req, res) {
    //     res.sendFile(path.join(__dirname + '/'));
    // });
// app.use('/login', function(req, res){
//   res.render('/public/login.html')
// });
}
