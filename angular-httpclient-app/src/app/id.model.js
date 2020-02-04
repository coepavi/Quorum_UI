var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id : Number,
	name : String,
	email : String,
	phone : Number
});

module.exports = mongoose.model('User',userSchema);
