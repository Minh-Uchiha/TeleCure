//import  env
require('dotenv').config()
// Import neccessary libraries
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const app = express();

//connect to MongoDb database
mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true})
db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))
// Enable neccessary middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//subscriber router
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)
// Important variables
const PORT = process.env.PORT || 8080;

// Listen to the port
app.listen(PORT, () => console.log("Server is listening to port " + PORT));
