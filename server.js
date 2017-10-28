var express = require('express');
var bodyParser = require('body-parser');

var PORT = (process.env.PORT || 3000);

var app = express();

app.use(express.static('public'));

var methodOveride = require('method-override');
app.use(methodOveride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
});

module.exports = app;