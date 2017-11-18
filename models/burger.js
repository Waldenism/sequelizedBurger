var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback) {
		orm.selectAll('burgers', function(res) {
			callback(res);
		});
	},

	insertOne: function(burg) {
		orm.insertOne('burgers', 'burger_name', burg);
	},
	updateOne: function(id) {
		orm.updateOne('burgers', 'devoured', 'id', id);
	},
	deleteOne: function(id) {
		orm.deleteOne('burgers', 'id', id);
	}
};

module.exports = burger;