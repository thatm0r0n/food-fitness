// router module from express
const router = require('express').Router();

// require the mongoose model
let User = require('../models/user.model');

router.route('/').get((req,res) =>{
	User.find()
	.then(users => res.json(users))
	.catch(err => res.status(400).json('Error: ' +err));
});
