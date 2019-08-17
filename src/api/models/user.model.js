const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const User_Schema = new Schema({
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
        type: Object,
        default: []
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
        type: String,
        default: null
    },
    mentor: {
        type: String,
        default: null
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


const User = mongoose.model('User', User_Schema);

module.exports = User;
