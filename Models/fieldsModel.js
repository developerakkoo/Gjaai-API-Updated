const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fieldSchema = new Schema({

    name:[{
        type: Object
    }],

    institute:{
        type: Schema.Types.ObjectId,
        ref:"Institute"
    }
    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Fields', fieldSchema);