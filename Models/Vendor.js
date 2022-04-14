const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({

    Username:{
        type: String
    },

    Password:{
        type: String
    },

    isTemplateEditAccess:{
        type: Boolean,
        default: false
    },

    isInstituteRegistrationAccess:{
        type: Boolean,
        default: false
    },

    isImageDownloadAccess:{
        type: Boolean,
        default: false
    },

    institutes:[
        {
            type: Schema.Types.ObjectId,
            ref: "Institute"
        }
    ]


                    

    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Vendor', vendorSchema);