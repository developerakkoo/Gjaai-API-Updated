const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const smallAdmin = new Schema({

    email:{
        type: String
    },

    password:{
        type: String
    },

    institutes:[{
        type: Schema.Types.ObjectId,
        ref: "Institute"
    }],

    isEdit: {
        type: Boolean,
        default: false
    },

    isReadOnly: {type: Boolean, default: true}


}, {timestamps: true})


module.exports = mongoose.model('smallAdmin', smallAdmin);