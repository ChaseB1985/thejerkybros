

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('./config/connection');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const mysql = require('mysql');
// const mysql2 = require('mysql2');
// // controller imports
const userController = require('./controllers/user-controller');
const viewsController = require('./controllers/views-controller');
const routes = require('./controllers/jerky-controller');
// directory references
//was client
const clientDir = path.join(__dirname, '/public');

// set up the Express App
const app = express();
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing


require('./config/passport')(passport);

// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the cookie-parser to help with auth token,
// it must come before the customAuthMiddleware
app.use(cookieParser());
//app.use(customAuthMiddleware);

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

// passport stuff
app.use(session({
	secret: 'stuffcanalsobestuff',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
//require("./routes/htmlRoutes")(app);
app.use(routes);
app.use(userController);
app.use(viewsController);

// Requiring our models for syncing
//const db = require('./models/index');
require('./controllers/register-controller')(app, passport);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});