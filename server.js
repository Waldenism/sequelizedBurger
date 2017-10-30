var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var PORT = (process.env.PORT || 3000);
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// var methodOveride = require('method-override');
// app.use(methodOveride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
});

module.exports = app;