// router module from express
const router = require('express').Router();

// require the mongoose model
let User = require('../models/user.model');

// creating the / route after user
router.route('/').get((req,res) =>{
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' +err));
});
 
 // creating the add route for user/add
 router.route('/add').post((req,res) =>{
 	const username = req.body.username;
 	const newUser = new User({username});

 	newUser.save()
 		.then(()=> res.json('User Added!'))
 		.catch(err => res.status(400).json('Error:' + err));
 });

 module.exports = router;