var express = require('express')
var router = express.Router()

var burger = require('../models/burger.js')

// selectAll
router.get('/', function (req, res) {
  res.redirect('/burgers')
})

router.get('/burgers', function (req, res) {
  burger.selectAll(function (data) {
    res.render('index', { burgers: data })
  })
})

// insertOne
router.post('/burgers/make', function (req, res) {
  burger.insertOne(req.body.burger_name, function (result) {
    res.redirect('/')
  })
})

// updateOne
router.put('/burgers/devour', function (req, res) {
  burger.updateOne(req.body.burger_name, function (result) {
    res.redirect('/')
  })
})

// deleteOne
router.put('/burgers/destroy', function (req, res) {
  burger.deleteOne(req.body.burger_name)
})

module.exports = router
