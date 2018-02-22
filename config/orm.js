var connection = require('./connection.js')

function printQuestionMarks (num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push('?')
  }
  return arr.toString()
}

function objToSql (ob) {
  var arr = []

  for (var key in ob) {
    arr.push(key + '=' + ob[key])
  }
  return arr.toString()
}

var orm = {
  selectAll: function (table, callback) {
    var query = 'SELECT * FROM ' + table + ';'
    connection.query(query, function (err, result) {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: function (table, columns, values, cb) {
    var query = 'INSERT INTO ' + table

    query += '('
    query += columns.toString()
    query += ') '
    query += 'VALUES ('
    query += printQuestionMarks(values.length)
    query += ')'

    connection.query(query, values, function (err, result) {
      if (err) throw err
      cb(result)
    })
  },
  updateOne: function (table, column, condition, cb) {
    var query = 'UPDATE ' + table

    query += ' SET '
    query += objToSql(column)
    query += ' WHERE '
    query += condition

    console.log(query)

    connection.query(query, function (err, result) {
      if (err) throw err
      cb(result)
    })
  },
  deleteOne: function (table, column, value) {
    var query = 'DELETE FROM ?? WHERE ?? = ?'

    connection.query(query, [table, column, value], function (err, res) {
      if (err) throw err
    })
  }
}

module.exports = orm
