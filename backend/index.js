// import the files
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  

require('dotenv').config();

// use the imported files
const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.json()); //body parser 

// mongodb connection
const uri = process.env.LOCAL_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>{
	console.log('connectedto database mongodb @ 27017');
});

// require the routes
const userRouter = require('./routes/users');
const appointmentRouter = require('./routes/appointments');

// use the required routes
app.use('/users', userRouter);
app.use('/appointments', appointmentRouter);

//to check whether server is running
app.listen(port, ()=>{
	console.log('Server is running on port:',port);
});