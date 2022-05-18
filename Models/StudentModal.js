const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({


    SrNo:{
        type: String,
    },

    LoginID:{
        type: String
    },

    Password:{
        type: String
    },

    GRNo:{
        type: String
    },

    Class:{
        type: String
    },

    Division:{
        type: String
    },

    StudentID:{
        type: String
    },

    StudentName:{
        type: String
    },

    MotherName:{
        type: String
    },

    BirthDate:{
        type: String
    },

    AdharNo:{
        type: String
    },

    MobileNo:{
        type: String
    },

    StudentAddress:{
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