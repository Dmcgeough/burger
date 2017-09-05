var express = require("express");
var burgers = require("../models/burger.js")
var router = express.Router();

//Created routes to access correct information and perform the correct functions
// this is a standard select all function
router.get("/", function(req, res) {
  burgers.all(function(data){
    res.render("index", {burgers:data});
  });
});
// this adds a new burger to the list
router.post("/", function(req, res) {
burgers.insert(req.body.name, function(data){
    res.redirect("/");
  });
});
//this is what devours the burger and updates the status
router.put("/:id", function(req, res) {
burgers.update(req.params.id, function(data){
    res.redirect("/");
  });
});

module.exports = router;