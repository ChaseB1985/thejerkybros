// let connection = require('../config/connection');
// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
// // ===============================================================================
// console.log('html rout connected');
// var path = require('path');


// module.exports = function(app) {
//     var jerky = require('../models/jerky');

//     app.get("/", function(req, res){
//         jerky.all(function(data){
//             var hbsObject = {
//                 jerky: data
//             };
//             console.log(hbsObject);
//             //console.log(jerky);
//             res.render("order", hbsObject);
//             console.log(data);
//         });
//     });
//     app.post('/api/jerky', function(req, res) {
//         jerky.create([
//             "flavor", "purchased"
//         ], [
//             req.body.flavor, req.body.purchased
//         ], function(result){
//             res.json({ id: result.insertId });
//             console.log(req.body.flavor, req.body.purchased);
//             console.log(id);
//         });
//     });
//     app.put('/api/jerky/:id', function(req, res) {
//         let condition = "id = " + req.params.id;

//         console.log('condition', condition);

//         jerky.update({
//             purchased: req.body.purchased
//         }, condition, function(result) {
//             if (result.changedRows == 0) {
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//             }
//             console.log(id);
//             console.log(purchase);
//         });
//     });

//     app.delete('/api/jerky/:id', function(req, res) {
//         var condition = 'id = ' + req.params.id;

//         jerky.delete(condition, function(result) {
//             if (result.affectedRows == 0) {
//                 return res.status(404).end();
//             } else{
//                 res.status(200).end();
//             }
//         });
//     });

//     // app.get('/index', function(req, res) {
//     //     res.sendFile(path.join(__dirname + '/./public/index.html'));
//     // });
//     // app.post('/login', function(req, res){
//     //     var person = {
//     //         email: req.body.email
//     //     };
//     // connection.query
//     // })
//     app.get("/", function(req, res){
//         //Find count of users in DB
//         var q = "SELECT COUNT(*) AS count FROM jerky";
//         connection.query(q, function(err, results){
//             if(err) throw err;
//             var count = results[0].count; 
//             res.render("home", {count: count});
//         });
//     });
    

//     app.get('/jerky', function(req, res) {
//         //res.sendFile(path.join(__dirname + '/../public/order.html'));
//         res.render(path.join(__dirname + '/../views/order.handlebars'));
//     });
    
//     // USE route returns home.html for any undefined GET routes.
//     // app.use(function (req, res) {
//     //     res.sendFile(path.join(__dirname + '/'));
//     // });
// app.use('/login', function(req, res){
//   //res.render('/public/login.html')
//   res.render(path.join(__dirname + '/../views/login.handlebars'));
// });
// }



// app.post("/reg", function(req, res){
//     var person = {
//         email: req.body.email
//     };
//     connection.query('INSERT INTO users SET ?', person, function(err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });