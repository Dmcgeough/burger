var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var connection = require("./config/connection.js");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/",routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
//this file requires all of my various npm packages as well as sets them up and specifying the port that my app should use.