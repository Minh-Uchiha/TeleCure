const express = require("express");

const { patientSignup, patientLogin, doctorSignup, doctorLogin } = require('../controllers/auth.js');

const router = express.Router();

router.post('/patient/signup', patientSignup);
router.post('/patient/login', patientLogin);

router.post('/doctor/signup', doctorSignup);
router.post('/doctor/login', doctorLogin);

module.exports = router;