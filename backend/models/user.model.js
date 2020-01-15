// import the mongoose module
const mongoose = require('mongoose');

// use the schema method
const Schema = mongoose.Schema;

// make a new schema with parameter username and timestamp
const userSchema = new Schema({
	username:{
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
}, {
	timestamps: true,
});

// mongoose model method
const User = mongoose.model('User', userSchema);

module.exports = User;