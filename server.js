// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/user")(app);
require("./routes/htmlRoutes")(app);

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
