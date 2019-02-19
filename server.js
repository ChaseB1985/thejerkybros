// Dependencies
require('dotenv').config()
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

// Requiring our models for syncing
require("./routes/htmlRoutes")(app);
const db = require('./models/index');

// Set the app to listen on port 3000
// app.listen(3000, function() {
//   console.log("App running on port 3000!");
// });
db.sequelize.sync().then(() => {
  // inside our db sync callback, we start the server.
  // this is our way of making sure the server is not listening
  // to requests if we have not yet made a db connection
  app.listen(3000, () => {
    console.log(`App listening on PORT 3000`);
  });
});