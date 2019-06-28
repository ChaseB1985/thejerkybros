let mysql = require ("mysql");

// var connection = mysql.createConnection({
//     host    : 'localhost',
//     port    : 3306,
//     user    :'root',
//     password : 'root',
//     database : 'jerky2_db'
//   });

//   connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " +err.stack);
//         return;
//     }
//     console.log("hey hey you connected as id " + connection.threadId);
// });
var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        // database: 'jerky2_db'
        'database': 'pf4s9aefrvqxw7p9'
    })
};

  connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " +err.stack);
        return;
    }
    console.log("hey hey you connected as id " + connection.threadId);
});

 module.exports = connection;