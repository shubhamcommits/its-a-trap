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
        type: String,
        default: []
    },
    nationality: {
        type: Object,
        default: null
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
    shg: {
        type: Object,
        ref: 'SHG',
        default: null
    },
    mentees: [{
        type: Object,
        ref: 'User',
        default: []
    }],
    has_manager: {
        type: Boolean,
        default: false
    },
    manager: {
        type: Object,
        ref: 'Manager',
        default: null
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });


const Mentor = mongoose.model('Mentor', Mentor_Schema);

module.exports = Mentor;
