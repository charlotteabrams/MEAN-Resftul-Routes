var mongoose = require('mongoose')
var path = require('path')
var Schema = mongoose.Schema;

var FriendSchema = new mongoose.Schema({
	fname: { type: String, required: true, minlength: 1},
	lname: { type: String, required: true, minlength: 1},
	dob: Date,
}, {timestamp :true});

var Friend = mongoose.model('Friend', FriendSchema)