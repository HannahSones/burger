const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();


let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8080,
        user: "root",
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
}

module.exports = connection;