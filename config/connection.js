const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config();

let connection;

// URL required when deploying app to heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASS,
    database: 'burgers_db',
  });
}


connection.connect(function(err) {
  if (err) {
    console.error('Connection error');
    return;
  }
  console.log('Connected');
});

module.exports = connection;
