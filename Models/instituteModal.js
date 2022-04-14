const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instituteSchema = new Schema({

    Name:{
        type: String
    },

    UDiseNo:{
        type: String
    },

    Address:{
        type: String
    },

    email: {
        type: String
    },

    ContactPerson:{
        type: String
    },

    ContactNo:{
        type: String
    },

    MobileNo:{
        type: String
    },

    CardNo:{
        type: String
    },

    LessColor:{
        type: Boolean
    },

    LessPrinting: {
        type: Boolean
    },

    LessMatter:{
        type: Boolean
    },

    Language:{
        type: String
    },

    Side:{
        type: String
    },

   

    CardQuantity:{
        type: Number
    },

    FinalRate:{
        type: Number
    },

    PaymentMode:{
        type: String
    },

    templatePhoto:[{
        type: String
    }],

    inputs:[
        {
            type: Schema.Types.ObjectId,
            ref: "Input"
        }
    ]
    

    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Institute', instituteSchema);