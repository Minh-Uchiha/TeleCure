const { Schema, model, default: mongoose } = require("mongoose");

const patientSchema = new Schema(
  {
    forename: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
      },
    title: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        unique: true,
        required: true
    },
    phone_number: {
        type: Number,
        unique: true,
        required: true
    },
    job_title: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: false
    },
    password: {
        type: String,
        required: true,
    },
    chat_list: [{
        type: Schema.Types.ObjectId,
        ref: 'ChatList'
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = model("Patient", patientSchema);