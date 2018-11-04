var mysql = require("mysql")
require("dotenv").config;

var connection = mysql.createConnection({
    host:process.env.db_host || "localhost",
    port:process.env.db_port || 3306,
    user:process.env.db_username || "root",
    password:process.env.db_password || "Ulgo1149",
    database:process.env.db_database || "burgerdb"
});


module.exports = connection