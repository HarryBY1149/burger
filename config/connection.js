var mysql = require("mysql")

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Ulgo1149",
    database:"burgerdb"
});


module.exports = connection