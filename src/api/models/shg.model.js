const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const SHG_Schema = new Schema({
    profile_image: {
        type: String,
        default: "user.png"
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    latitude: {
        type: Number,
        default: 0.0
    },
    longitude: {
        type: Number,
        default: 0.0
    },
    country: {
        type: String,
        default: null
    },
    mentor: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    manager: {
        type: String,
        required: true
    },
    mentees: [{
        type: Object,
        ref: 'User',
        default: []
    }],
    logs: [{
        type: String,
        default: ["SHG create at "+Date.now]
    }],
    amount: {
        type: Number,
        default: 0.0
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });


const SHG = mongoose.model('SHG', SHG_Schema);

module.exports = SHG;