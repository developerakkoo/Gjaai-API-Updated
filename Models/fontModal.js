const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fontSchema = new Schema({

    family:{
        type: String
    },

    files:{
        type: Object
    },

    size:{
        type: String
    },

    style: {
        type: String
    }
                    

    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Font', fontSchema);