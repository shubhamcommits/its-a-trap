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
    creation_date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });


const SHG = mongoose.model('SHG', SHG_Schema);

module.exports = SHG;