// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./config.js');

// Constants
var port = config.portNum,
    mongoUri = 'mongodb://localhost:27017/AppName';

// App definition
var app = express();

app.use(express.static(__dirname + '/public'));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect mongoose
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected on ', mongoUri);
});

// routes
require('./app/routes.js')(app);

// Listen (start app with node server.js)
app.listen(port, function() {
  console.log('App listening on port ', port);
})
