var express = require("express");
var burgers = require("../models/burger.js")
var router = express.Router();

router.get("/", function(req, res) {
  burgers.all(function(data){
    res.render("index", {burgers:data});
  });
});

router.post("/", function(req, res) {
burgers.insert(req.body.name, function(data){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
burgers.update(req.params.id, function(data){
    res.redirect("/");
  });
});

module.exports = router;