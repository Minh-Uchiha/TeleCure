const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Doctor = require("../models/Doctor.model");
const Patient = require("../models/Patient.model");
const router = require("express").Router();

const saltRounds = 10;

const doctorSignup = (req, res) => {
    try {
        const { dr_forename, dr_surname, title, specialty, hospital, years_expirience,  phone_number, password, reenteredPassword, email_address } = req.body;
        if(dr_forename === '' || dr_surname === '' || specialty === '' || title === '' || hospital === '' || years_expirience === '' || phone_number === '' ||  email_address === '' || password === '' || reenteredPassword === ''){
            res.status(400).json({message:"Fill out all fields"});
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email_address)) {
            res.status(400).json({ message: 'Provide a valid email address.' });
            return;
        }
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!passwordRegex.test(password)) {
            res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
            return;
        } 
        if (password !== reenteredPassword) {
            res.status(400).json({ message: 'Passwords must match.' });
            return;
        } 
        Doctor.findOne({ email_address })
        .then((foundUser) => {
            // If the user with the same email already exists, send an error response
            if (foundUser) {
                res.status(400).json({ message: "Email address in use." });
                return;
            }
            if(!foundUser) {
                //encrypt password
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(password, salt);

                // Create the new user in the database
                // We return a pending promise, which allows us to chain another `then` 
                return Doctor.create({ dr_forename, dr_surname, title, specialty, hospital, years_expirience, phone_number, email_address, password: hashedPassword });
            }
        }).then(createdUser =>{
            // Deconstruct the newly created user object to omit the password
            // We should never expose passwords publicly
            if(createdUser){
                const { dr_forename, dr_surname, title, specialty, hospital, years_expirience, phone_number, email_address } = createdUser;
                console.log("in progress 5 ===========>")
                // Create a new object that doesn't expose the password
                const user = { dr_forename, dr_surname, title, specialty, hospital, years_expirience, phone_number, email_address };
                // Send a json response containing the user object
                res.status(201).json({ user: user });
            }
        })
    }
     catch (error){
        console.log(error);
        res.status(500).json({ message: error });
    }
    console.log("account created")
}

const doctorLogin = (req, res) => {
    const { email_address, password } = req.body;
 
    // Check if email or password are provided as empty string 
    if (email_address === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }
   
    // Check the users collection if a user with the same email exists
    Doctor.findOne({ email_address })
    .then((foundUser) => {
        
        if (!foundUser) {
            // If the user is not found, send an error response
            res.status(401).json({ message: "User not found." })
            return;
        }

        // Compare the provided password with the one saved in the database
        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
    
        if (passwordCorrect) {
            // Deconstruct the user object to omit the password
            const { _id, dr_forename, dr_surname, title, specialty, hospital, years_expirience, phone_number, email_address } = foundUser;
            
            // Create an object that will be set as the token payload
            const payload = { _id, dr_forename, dr_surname, title, specialty, hospital, years_expirience, phone_number, email_address };
            // Create and sign the token
            const authToken = jwt.sign( 
            payload,
            process.env.TOKEN_SECRET,
            { algorithm: 'HS256', expiresIn: "6h" }
            );

            // Send the token as the response
            res.status(200).json({ authToken: authToken });
        }
        else {
            res.status(401).json({ message: "Unable to authenticate the user" });
        }
    
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
}

const patientSignup = (req, res) => {
    try {
        const { forename, surname, title, email_address, phone_number, job_title, age, dob, password, reenteredPassword } = req.body;
        if(forename === '' || surname === '' || title === '' || email_address === '' || phone_number === '' || password === '' || reenteredPassword === ''){
            res.status(400).json({message:"Fill out all fields"});
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email_address)) {
            res.status(400).json({ message: 'Provide a valid email address.' });
            return;
        }
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!passwordRegex.test(password)) {
            res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
            return;
        }
        if (password !== reenteredPassword) {
            res.status(400).json({ message: 'Passwords must match.' });
            return;
        } 
        Patient.findOne({ email_address })
        .then((foundUser) => {
            // If the user with the same email already exists, send an error response
            if (foundUser) {
                res.status(400).json({ message: "Email address in use." });
                return;
            }
            if(!foundUser) {
                //encrypt password
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(password, salt);

                // Create the new user in the database
                // We return a pending promise, which allows us to chain another `then` 
                return Patient.create({ forename, surname, title, email_address, phone_number, job_title, age, dob, password: hashedPassword });
            }
        }).then(createdUser =>{
            // Deconstruct the newly created user object to omit the password
            // We should never expose passwords publicly
            if(createdUser){
                const { forename, surname, title, email_address, phone_number, job_title, age, dob } = createdUser;
                console.log("in progress 5 ===========>")
                // Create a new object that doesn't expose the password
                const user = { forename, surname, title, email_address, phone_number, job_title, age, dob };
                // Send a json response containing the user object
                res.status(201).json({ user: user });
            }
        })
    }
     catch (error){
        console.log(error);
        res.status(500).json({ message: error });
    }
    console.log("account created") 
}

const patientLogin = async (req, res) => {
    const { email_address, password } = req.body;
 
    // Check if email or password are provided as empty string 
    if (email_address === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }
   
    // Check the users collection if a user with the same email exists
    Patient.findOne({ email_address })
    .then((foundUser) => {
        
        if (!foundUser) {
            // If the user is not found, send an error response
            res.status(401).json({ message: "User not found." })
            return;
        }
        // Compare the provided password with the one saved in the database
        const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
        if (passwordCorrect) {
            // Deconstruct the user object to omit the password
            const { _id, forename, surname, title, email_address, phone_number, job_title, age, dob } = foundUser;
            
            // Create an object that will be set as the token payload
            const payload = { _id, forename, surname, title, email_address, phone_number, job_title, age, dob };
            // Create and sign the token
            const authToken = jwt.sign( 
            payload,
            process.env.TOKEN_SECRET,
            { algorithm: 'HS256', expiresIn: "6h" }
            );
            // Send the token as the response
            res.status(200).json({ authToken: authToken });
        }
        else {
            res.status(401).json({ message: "Unable to authenticate the user" });
        }
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
}

module.exports = {
    doctorLogin,
    doctorSignup,
    patientLogin,
    patientSignup,
}