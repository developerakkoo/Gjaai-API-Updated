const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    studentId:{
        type: String
    },

    email:{
        type: String
    },

    password:{
        type: String
    },

    GrNo:{
        type: String
    },

    division:{
        type: String
    },

 

    studentName:{
        type: String
    },

    motherName:{
        type: String
    },

    DOB:{
        type: String
    },

    AdharNo:{
        type: Number
    },

    mobileNo:{
        type: Number
    },

    address:{
        type: String
    },

  

    status:{
        type: Boolean
    },

    finalForPrint:{
        type: Boolean
    }

}, {
    timestamps: true, strict: false
});

module.exports = mongoose.model('User', userSchema);