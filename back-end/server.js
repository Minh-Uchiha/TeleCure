// Import neccessary libraries
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

require('dontenv').config();

// Enable neccessary middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Api Home");
})


//route imports
const chatRoutes = require("./routes/chat.routes");
app.use("/", chatRoutes);

const authRoutes = require('./routes/auth.js');
app.use("/", authRoutes)

// Listen to the port
app.listen(PORT, () => console.log("Server is listening to port " + PORT));
