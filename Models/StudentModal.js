const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    UDiseNo:{
        type: String
    },
    userId:{
        type: String
    },

    password:{
        type: String
    },
    ContactNo:{
        type: String
    },
    StudentPhoto:[{
        type: Object
    }],

    isIdUploaded:{
        type: Boolean,
        default: false
    }
    // StudentPhoto:[{
    //     image:{
    //         type: String
    //     },
    //     index: {
    //         type: String
    //     },
    //     key:{
    //         type: String
    //     },
    //     position: {
    //         type: Object
    //     }

    // }]

}, {
    timestamps: true,
    strict: false
});


module.exports = mongoose.model('Student', StudentSchema);