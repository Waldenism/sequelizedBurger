var express = require('express')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var PORT = (process.env.PORT || 3000)
var app = express()

var db = require('./models')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

var routes = require('./controllers/burgers_controller.js')

app.use('/', routes)

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log('Listening on PORT: ' + PORT)
  })
})
