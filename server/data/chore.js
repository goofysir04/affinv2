var mongoose = require("mongoose");
var choreSchema = mongoose.Schema({
	name: String,
	expectedTime: String,
	image: String
});

module.exports = mongoose.model("chore", choreSchema);

