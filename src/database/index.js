var mysql = require('mysql');

var dbConnection = new mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = dbConnection;



// exports.dbConnection.query(sql, function (err, result) {//callback promise instead?
//     if (err) throw err;
//     console.log("Done");
//     console.log(result);
//   });


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".