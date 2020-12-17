const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
	host: "localhost",
    port: 3000,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"

});

connection.connect(function(err) {
	if (err) throw err;
});

module.exports = connection;