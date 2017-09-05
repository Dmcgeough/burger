var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });
var connection = mysql.createConnection({
  host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ryh6xj9sys698vim",
  password: "wqettfpr2a19ufv7",
  database: "kae1utq92eafg2vd"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
//this entire file just tests the connection of the server and allows it to display the fact that it has connected.