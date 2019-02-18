// Dependencies
var express = require("express");
var mysql = require("mysql");
let bodyParser = require("body-parser");
var path = require("path")
let connection = require('./config/connection');
// Initialize Express
var app = express();


// Set up a static folder (public) for our web app
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/login', function(req, res){
//   res.render('/public/login.html', {title: "login page"});
// })
require("./routes/htmlRoutes")(app);

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
