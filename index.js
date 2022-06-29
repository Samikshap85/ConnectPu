const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config(); 

//connect to db
mongoose.connect(
process.env.DB_Connect,()=> 
console.log('connect to db')
);

//Import routes
const authRoute = require('./routes/authentication');


//Middleware
app.use(express.json());


//Route Middleware (time between request and response)
app.use('/api/user' , authRoute);
//app.use('/api/channel', channelRoute);




app.listen(3000,() => console.log('Server up and running'));
