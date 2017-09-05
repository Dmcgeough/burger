var orm = require ("../config/orm.js");
var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
   insert: function(vals, cb) {
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      cb(res);
    });
  },
   update: function(id, cb) {
    orm.updateOne("burgers", "devoured", id, function(res) {
      cb(res);
    });
  }
};
module.exports = burgers;