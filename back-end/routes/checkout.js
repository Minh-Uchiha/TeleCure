const express = require("express");
const router = express.Router();

// Getting the createCheckOutSession function in the controllers folder
const { createCheckOutSession } = require("../controllers/checkout");

router.post("/", createCheckOutSession);

module.exports = router;
