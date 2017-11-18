var connection = require('./connection.js');

// function printQuestionMarks(num) {
// 	var arr = [];
// 	for (var i = 0; i < num; i++) {
// 		arr.push("?");
// 	}
// 	return arr.toString();
// }

// function objToSql(ob) {
// 	var arr = [];

// 	for (var key in ob) {
// 		var value = ob[key];
// 		if (Object.hasOwnProperty.call(ob, key)) {
// 			if(typeof value === 'string' && value.indexOf(" ") >= 0) {
// 				value = "'" + value + "'";
// 			}
// 			arr.push(key + "=" + value);
// 		}
// 	}
// 	return arr.toString();
// }

var orm = {
	//select All()
	selectAll: function(table, callback) {
		var query = 'SELECT * FROM ' + table + ';';
		connection.query(query, function(err, result) {
			if(err) throw err;
			callback(result);
		});
	},
	//insertOne()
	insertOne: function(table, column, value) {
		var query = "INSERT INTO ?? (??) VALUES (?)"; 


		connection.query(query, [table, column, value], function(err, result) {
			if (err) throw err;
			// callback(result);
		});
	},
	//updateOne()
	updateOne: function(table, column, condition, value) {
		var query = "UPDATE ?? SET ?? = true WHERE ?? = ?";

		connection.query(query, [table, column, condition, value], function(err, result) {
			if (err) throw err;
			// callback(result);
		});
	},

	///deleteOne()
	deleteOne: function(table, column, value) {
		var query = 'DELETE FROM ?? WHERE ?? = ?';

		connection.query(query, [table, column, value], function(err, res) {
			if (err) throw err;
		});
	}
};

module.exports = orm;