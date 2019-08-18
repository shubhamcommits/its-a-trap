const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const Mentor_Schema = new Schema({
    profile_image: {
        type: String,
        default: "user.png"
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    sex: {
        type: String
    },
    address: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    phone_number: {
        type: Number,
        default: 0
    },
    about: {
        type: String,
    },
    shg: {
        type: String,
        default: null
    },
    mentees: [{
        type: String,
        default: []
    }],
    has_applied: {
        type: Boolean,
        default: false
    },
    has_manager: {
        type: Boolean,
        default: false
    },
    manager: {
        type: String,
        default: null
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });


const Mentor = mongoose.model('Mentor', Mentor_Schema);

module.exports = Mentor;
