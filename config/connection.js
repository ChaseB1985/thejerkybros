let mysql = require ("mysql");

var connection = mysql.createConnection({
    host    : 'localhost',
    port    : 3306,
    user    :'root',
    password : 'root',
    database : 'jerky2_db'
  });

  connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " +err.stack);
        return;
    }
    console.log("hey hey you connected as id " + connection.threadId);
});
    // connection.connect(function(err){
    //   if (err) throw err;
    //   console.log('hey you connected');
    //   let sql = `CREATE DATABASE jerky2_db`;
    //   connection.query(sql, function (err, res){
    //     if (err) throw err;
    //     console.log('DB created');
    //   });
    // });

module.exports = connection;