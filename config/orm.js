var connection = require ("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM " + table + ";";
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
        
            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb) {
        var query = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function (table, cols, id, cb) {
        var query = `UPDATE ${table} 
                    SET ${cols} = true
                    WHERE id = ${id};`
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);            
        })
    }
};
module.exports = orm;