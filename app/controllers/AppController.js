var exports = module.exports = {};

// Dependencies
var User = require("../models/AppModel.js");

exports.getAll = function(req, res) {
  User.find({}, function(err, users) {
    if(err) return res.status(500).send(err);

    return res.json(users);
  })
}
