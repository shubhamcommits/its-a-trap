const mongoose = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema({

    _test: {
        type: String
    }
}, { strict: false });


const Test = mongoose.model('Test', testSchema);

module.exports = Test;
