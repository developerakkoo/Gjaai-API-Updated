const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({


    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Data', dataSchema);