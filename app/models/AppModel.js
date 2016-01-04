var mongoose = require("mongoose");

var appSchema = new Schema({
  name: { type: String, unique: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

appSchema.pre('save', function(next, date, something) {
  // pre allows you to perform a function on something before saving it to the
  // db. You can pass variables into it and then perform a func to save results
  // to db
})

module.exports = mongoose.model("app", appSchema);
