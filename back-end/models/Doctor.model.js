const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    dr_forename: {
        type: String,
        required: true
    },
    dr_surname: {
        type: String,
        required: true
      },
    title: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    years_expirience: {
        type: Number,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    email_address: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: '',
    },
    available: {
        type: Boolean,
        default: true,
    },
    average_ratings: {
        type: Number,
        default: 0,
    },
    patients_number: {
        type: Number,
        default: 0,
    },
    earnings: {
        type: Number,
        default: 0,
    },
    net_earnings: {
        type: Number,
        default: 0
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

module.exports = model("Doctor", doctorSchema);