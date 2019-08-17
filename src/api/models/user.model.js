const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const Caregiver_Schema = new Schema({

    profile_image: {
        type: String,
        default: "user.png"
    },
    full_name: {
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
    sex: [{
        type: Object,
        default: []
      }],
    nationality: [{
        type: Object,
        default: []
      }],
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
    languages: [{
        type: Object,
        default: []
    }],
    bio:{
        type: String,
        default: null
    },  
    looking_to_give:[{
        type: Object,
        default: []
      }],
    profile_status: {
        type: String,
        default: 'incompleted',
        enum: ['completed', 'incompleted']
    },
    patient: {
        sex: [{
            type: Object,
            default: []
          }],
    },
    accept_proposals_of: [{
        type: Object,
        ref: 'Caretaker'
    }],
    connections: [{
        type: Object,
        ref: 'Caretaker'
    }],
    sent_proposals_to: [{
        type: Object,
        ref: 'Caretaker'
      }],
    user_type: {
        type: String,
        default: 'caregiver'
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    files: [{
        orignal_name: {
          type: String,
          default: null
        },
        modified_name: {
          type: String,
          default: null
        }
      }],
    other_details:{
        availability:[{
            type: Object,
            default: []
        }]
    }
}, { strict: false });


const Caregiver = mongoose.model('Caregiver', Caregiver_Schema);

module.exports = Caregiver;
