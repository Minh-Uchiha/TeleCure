// Import neccessary libraries
const express = require("express");
const cors = require("cors");

const app = express();

// Enable neccessary middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Important variables
const PORT = process.env.PORT || 8080;

// Listen to the port
app.listen(PORT, () => console.log("Server is listening to port " + PORT));
