const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const smallAdmin = new Schema({

    email:{
        type: String
    },

    password:{
        type: String
    },

    institutes:{
        type: Schema.Types.ObjectId,
        ref: "Institute"
    }


}, {timestamps: true})


module.exports = mongoose.model('smallAdmin', smallAdmin);