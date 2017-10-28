var connection = require('./connection.js');

var orm = {
	//select All()
	selectAll: function(tableInput, callback) {
		var query = 'SELECT * FROM ' + tableInput + ';';
		connection.query(query, function(err, result) {
			if(err) throw err;
			console.log(result);
			callback(result);
		});
	},
	//insertOne()
	insertOne: function(table, column, value, callback) {
		var query = "INSERT INTO " + table + " ( " + column + " ) " + "VALUES ( " + value + " );"; 
		connection.query(query, value, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},
	//updateOne()
	updateOne: function(table, value, condition, callback) {
		var query = "UPDATE " + table + " SET " + value  + " WHERE " + condition;
		connection.query(query, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

module.exports = orm;

