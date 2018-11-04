var connection = require("../config/connection.js");

var orm = {
    selectAll : function (cb) {
        var queryString = "SELECT * FROM  burgers ;";
        connection.query(queryString, function (err, data) {
            if (err) {
                throw (err)
            } else {
                cb(data);
            }
        })
    },

    insertOne : function (name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
        connection.query(queryString, [name], function (err, data){
            if (err) {
                throw (err)
            } else {
                cb(data)
            }
        })
    },

    updateOne : function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";
        connection.query(queryString, [id], function(err, data){
            if (err) {
                throw(err)
            } else {
                cb(data);
            }
        })
    }
};

module.exports = orm;