const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    forename:{
        type: String,
        require: true
    },
    surname:{
        type: String,
        require: true

    },
    email_address:{
        type: String,
        require: true
    },
    dob:{
        type: Date,
        required: true
    },
    age:{
        type: Number,
        require: true
    },
    phone_number:{
        type: String,
        require: true
    },
    job_title:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    
    subscribedToChannel:{
        type: String,
        require: true

    },
    subscriberDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)