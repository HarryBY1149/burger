var express = require("express");
var app = express();
var exphbs = require("express-handlebars")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))
var PORT = process.env.PORT || 8080;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function (err) {
    if (err) throw err;
    console.log("server listening on port: " + PORT);
});