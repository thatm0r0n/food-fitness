const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
	username:{ type: String, required: true},
	description: { type: String, required: true},
	timings:{ type: Number, required: true},
	date:{type: Date, required: true},
},{
	timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment; 