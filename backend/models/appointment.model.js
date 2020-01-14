const mongoose = require('mongoose');

const Schema = mongoose.schema;

const appointmentSchema = new Schema({
	username:{ type: String, required: true},
	Description: { type: String, required: true},
	timings:{ type: Number, required: true},
	date:{type: Date, required: true},
},{
	timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;