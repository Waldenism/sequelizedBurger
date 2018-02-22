var orm = require('../config/orm.js')

var burger = {
  selectAll: function (callback) {
    orm.selectAll('burgers', function (res) {
      callback(res)
    })
  },
  insertOne: function (burg, cb) {
    orm.insertOne('burgers', ['burger_name', 'devoured'], [ burg, false ], cb)
  },
  updateOne: function (id, cb) {
    var condition = 'id=' + id
    orm.updateOne('burgers', { devoured: true }, condition, cb)
  },
  deleteOne: function (id) {
    orm.deleteOne('burgers', 'id', id)
  }
}

module.exports = burger
