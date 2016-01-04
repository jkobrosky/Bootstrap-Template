// Load the models
var User = require('./models/AppModel');

// Export the routes
module.exports = function(app) {

  // REST API

  // Get all users
  app.get('/api/users', User.getAll );

}
