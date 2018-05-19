// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  // port: 3306,
  // username: "xezr07e1hqvwm469",
  // password: "qf8kbv0lvrliscx2",
  // database: "tfxnuofy7u5nuy95",
  // host: "tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  // dialect: "mysql"

  host: "localhost",
  user: "root",
  password: "Newjob18",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
