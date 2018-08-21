const orm = require("../config/orm.js");

var burger = {
    // selects all from the burger table
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // creates a burger
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // updates a burger
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;