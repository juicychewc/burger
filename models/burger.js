var orm = require("../config/orm.js");

// show all
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // add item
    insertOne: function (column, value, cb) {
        orm.insertOne("burgers", column, value, function (res) {
            cb(res);
        });
    },

    // eat an item
    updateOne: function (columnValue, status, cb) {
        orm.updateOne("burgers", columnValue, status, function (res) {
            cb(res);
        });

    },
    // remove an eaten item
    delete: function (status, cb) {
        orm.delete("burgers", status, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;