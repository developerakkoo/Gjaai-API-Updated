const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signSchema = new Schema({

    institute:{
        type: String
    },

    key:{
        type: String
    },

    imageUrl:{
        type: String
    }

    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Sign', signSchema);  