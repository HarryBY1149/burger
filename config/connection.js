var mysql = require("mysql")

var connection = mysql.createConnection({
    host:process.env.db_host || "localhost",
    port:process.env.db_port || 3306,
    user:process.env.db_username || "root",
    password:process.env.db_password || "2a4c7bd3",
    database:process.env.db_database ||"heroku_178f3e5766e4f9d"
});

// mysql://ba4c0740dcd2b4:2a4c7bd3@us-cdbr-iron-east-01.cleardb.net/heroku_178f3e5766e4f9d?reconnect=true

module.exports = connection