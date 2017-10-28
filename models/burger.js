var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback) {
		orm.selectAll('burgers', function(res) {
			callback(res);
		});
	},
	insertOne: function(column, condition, callback) {
		orm.insertOne('burgers', column, condition, function(res) {
			callback(res);
		});

	},
	updateOne: function(column, condition, callback) {
		orm.updateOne('burgers', column, condition, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;