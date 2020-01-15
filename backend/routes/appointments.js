// require the router module form express
const router = require('express').Router();

// require the database model file
let Exercise = require('../models/appointment.model');

// creating the / route after the appointment
router.route('/').get((req,res) =>{
	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=>{
	const username = res.body.username;
	const description = res.body.description;
	const timings = Number(res.body.timings);
	const date = Date.parse(res.body.date);

	const newExercise = new Exercise({
		username,
		description,
		timings,
		date,
	});
	newExercise.save()
		.then(()=> res.json('Exercise added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;