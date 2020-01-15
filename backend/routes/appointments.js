// require the router module form express
const router = require('express').Router();

// require the database model file
let Appointment = require('../models/appointment.model');

// creating the / route after the appointment
router.route('/').get((req,res) =>{
	Appointment.find()
		.then(appointments => res.json(appointments))
		.catch(err => res.status(400).json('Error: ' + err));
});

// add route
router.route('/add').post((req, res)=>{
	const username = req.body.username;
	const description = req.body.description;
	const timings = Number(req.body.timings);
	const date = Date.parse(req.body.date);

	const newAppointment = new Appointment({
		username,
		description,
		timings,
		date,
	});
	newAppointment.save()
		.then(()=> res.json('Appointment added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// find element by id
router.route('/:id').get((req, res)=>{
	Appointment.findById(req.params.id)
		.then(exercise => res.json(exercise))
		.catch(err=> res.json('Error: ' +err));
});

// delete route
router.route('/:id').delete((req,res)=>{
	Appointment.findByIdAndDelete(req.params.id)
		.then(()=>res.json('Appointment deleted'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// update route
router.route('/update/:id').post((req,res)=>{
	Appointment.findById(req.params.id)
		.then(appointment =>{
			appointment.username = req.body.username;
			appointment.description = req.body.description;
			appontment.timings = Number(req.body.timings);
			appointment.date = Date.parse(req.body.date);

			appointment.save()
				.then(()=> res.json('Exercise updated'))
				.catch(err => res.status(400).json('Error: '+ err));
		})
		.catch(err=> res.status(400).json('Error: ' + err));
});

module.exports = router;