var mysql = require("mysql")
require("dotenv").config;

// var connection = mysql.createConnection(process.env.JAWSDB_URL);
var localConn= mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "Ulgo1149",
    database: "burgerdb"
});



module.exports = localConn;