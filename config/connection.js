const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();


let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3000,
        user: "root",
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
      console.error('error connecting');
      return;
    }
    console.log('connected');
  });

module.exports = connection;