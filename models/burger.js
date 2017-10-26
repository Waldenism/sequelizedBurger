var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback) {
		orm.selectAll('burgers', function(res) {
			callback(res);
		});
	},
	insertOne: function(column, condition, callback) {
		orm.insertOne('burger', column, condition, function(res) {
			callback(res);
		});

	},
	updateOne: function(column, condition, callback) {
		orm.updateOne('burger', column, condition, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;