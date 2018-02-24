var express = require('express')
var router = express.Router()

var db = require('../models')

router.get('/', function (req, res) {
  res.redirect('/burgers')
})

router.get('/burgers', function (req, res) {
  db.Burger.findAll({})
    .then(function (data) {
      res.render('index', {burgers: data})
    })
})

router.post('/burgers/make', function (req, res) {
  db.Burger.create({burger_name: req.body.burger_name})
    .then(function (data) {
      res.redirect('/')
    })
})

router.put('/burgers/devour', function (req, res) {
  console.log(req.body)
  db.Burger.update({
    devoured: 1
  }, {
    where: {id: req.body.id}
  })
    .then(function (data) {
      res.redirect('/')
    })
})

router.put('/burgers/destroy', function (req, res) {
  db.Burger.destroy({ where: {id: req.body.id} })
    .then(function (data) {
      res.redirect('/')
    })
})

module.exports = router
