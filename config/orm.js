var connection = require ("./connection.js");
// this is my orm which will create the functions to perform the correct actions on the app.
//this function allows you to see all burgers in the table. It returns the results in a callback.
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
    //this function allows you to insert a burger of your choosing into the table. It also returns the results in a callback
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
    // this function allows you to devour a burger and updates its status from devoured false to devoured true and once again returns the results.
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