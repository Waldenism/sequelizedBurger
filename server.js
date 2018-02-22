var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var methodOveride = require('method-override');
var exphbs = require('express-handlebars');
var PORT = (process.env.PORT || 3000);
var app = express();

//serve static from 'public'
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOveride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
	console.log('Listening on PORT: ' + PORT);
});