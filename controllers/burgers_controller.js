var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

//selectAll
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		res.render('index', { burgers: data });
	}); 
}); 

//insertOne
router.post('/burgers', function(req, res) {
	burger.insertOne(
		['burger_name'], 
		[req.body.burger_name], 
		function(data) {
			res.redirect('/');
			// res.end();
		});
});

//updateOne
router.put('/burgers/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	burger.updateOne({
		devoured: true
	}, condition, function(data) {
		res.end();
		// res.redirect('/');
	});
});

module.exports = router;