// // Dependencies
// require('dotenv').config()
// const express = require("express");
// const mysql = require("mysql");
// const bodyParser = require("body-parser");
// const path = require("path")
// const connection = require('./config/connection');
// const customAuthMiddleware = require('./middleware/custom-auth-middleware');
// const exphbs = require('express-handlebars');
// const cookieParser = require("cookie-parser");
// // Initialize Express
// const app = express();
// // Controllers
// const userController = require('./controllers/user-controller');
// const viewsController = require('./controllers/views-controller');

// // Set up a static folder (public) for our web app
// app.set("view engine", "handlebars");
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/login', function(req, res){
// //   res.render('/public/login.html', {title: "login page"});
// // })
// app.use(cookieParser());
// app.use(customAuthMiddleware);
// // Requiring our models for syncing
// require("./routes/htmlRoutes")(app);
// const db = require('./models/index');

// // Set the app to listen on port 3000
// // app.listen(3000, function() {
// //   console.log("App running on port 3000!");
// // });
// db.sequelize.sync().then(() => {
//   // inside our db sync callback, we start the server.
//   // this is our way of making sure the server is not listening
//   // to requests if we have not yet made a db connection
//   app.listen(3000, () => {
//     console.log(`App listening on PORT 3000`);
//   });
// });

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const connection = require('./config/connection');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const customAuthMiddleware = require('./middleware/custom-auth-middleware');
//const mysql = require('mysql');
// controller imports
const userController = require('./controllers/user-controller');
const viewsController = require('./controllers/views-controller');

// directory references
//was client
const clientDir = path.join(__dirname, '/public');

// set up the Express App
const app = express();
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing
// require("./routes/htmlRoutes")(app);
// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the cookie-parser to help with auth token,
// it must come before the customAuthMiddleware
app.use(cookieParser());
app.use(customAuthMiddleware);

// serve up the public folder so we can request static
// assets from our html document
app.use('/public', express.static(clientDir));

// set up handlebars
app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: 'views/layouts'
}));
app.set('view engine', 'handlebars');

// hook up our controllers
app.use(userController);
app.use(viewsController);


// Requiring our models for syncing
const db = require('./models/index');

// sync our sequelize models and then start server
db.sequelize.sync().then(() => {
  // inside our db sync callback, we start the server.
  // this is our way of making sure the server is not listening
  // to requests if we have not yet made a db connection
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});