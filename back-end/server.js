// Import neccessary libraries
const express = require("express");
const cors = require("cors");

require("dotenv/config");

//connects to database
require("./db");

const app = express();
const PORT = process.env.PORT || 8080;

// Enable neccessary middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api Home");
});

//route imports
// const chatRoutes = require("./routes/chat.routes");
// app.use("/", chatRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const checkoutRoutes = require("./routes/checkout");
app.use("/create-checkout-session", checkoutRoutes);

// Listen to the port
app.listen(PORT, () => console.log("Server is listening to port " + PORT));
module.exports = app;
