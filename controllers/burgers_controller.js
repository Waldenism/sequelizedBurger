// var express = require('express');
// var router = express.Router();

var burger = require('../models/burger.js');

module.exports = function(app) {

	//selectAll
	app.get('/', function(req, res) {
		burger.selectAll(function(data) {
			res.render('index', { burgers: data });
		}); 
	}); 

	//insertOne
	app.post('/burgers/make', function(req, res) {
		burger.insertOne(req.body.burger_name);
	});

	//updateOne
	app.put('/burgers/devour', function(req, res) {
		burger.updateOne(req.body.burger_name);	
		console.log(req.body.burger_name);	
	});

	//deleteOne
	app.put('/burgers/destroy', function(req, res) {
		burger.deleteOne(req.body.burger_name);		
	});

};

// module.exports = router;