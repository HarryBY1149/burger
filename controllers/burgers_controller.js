var express  = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/post/:name", function (req, res) {
    console.log(req.body)
    burger.insertOne(req.body.name, function (result) {
        res.json({id: result.insertId})
    });
});

router.put("/api/put/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        if (result.rowsChanged !== 0) {
            console.log("Burger successfully devoured.");
            res.status(200).end();
        } else {
            res.status(500).end();
        };
    });
});

module.exports = router;
