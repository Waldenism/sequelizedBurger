var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if(typeof value === 'string' && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

var orm = {
	//select All()
	selectAll: function(tableInput, callback) {
		var query = 'SELECT * FROM ' + tableInput + ';';
		connection.query(query, function(err, result) {
			if(err) throw err;
			// console.log(result);
			callback(result);
		});
	},
	//insertOne()
	insertOne: function(table, column, value, callback) {
		var query = "INSERT INTO " + table;

		query += " (";
		query += column.toString();
		query += ") ";
		query += "VALUES (";
		query += printQuestionMarks(value.length);
		query += ") "; 
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

