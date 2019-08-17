const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const Manager_Schema = new Schema({
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
    pending_mentors: [{
        type: String,
        default: []
    }],
    mentors: [{
        type: String,
        default: []
    }],
    pending_shg: [{
        type: String,
        default: []
    }],
    creation_date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });


const Manager = mongoose.model('Manager', Manager_Schema);

module.exports = Manager;
