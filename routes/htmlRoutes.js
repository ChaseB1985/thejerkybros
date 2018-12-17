// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
console.log('html rout connected');
var path = require('path');

module.exports = function(app) {

    //GET route for /survey returns survey.html.
    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/login.html'));
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
