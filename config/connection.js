var mysql = require("mysql")

var connection = mysql.createConnection({
    host:"us-cdbr-iron-east-01.cleardb.net",
    port:3306,
    user:"ba4c0740dcd2b4",
    password:"2a4c7bd3",
    database:"heroku_178f3e5766e4f9d"
});

// mysql://ba4c0740dcd2b4:2a4c7bd3@us-cdbr-iron-east-01.cleardb.net/heroku_178f3e5766e4f9d?reconnect=true

module.exports = connection