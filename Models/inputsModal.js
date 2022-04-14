const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inputSchema = new Schema({

   data: [
       {
           value: String,
           position: []
       }
   ],


   input: [
       {
           key: String,
           type: String,
           options: {
               placeholder: String,
               required: Boolean
           },
       }
   ],
    institute:{
        type: Schema.Types.ObjectId,
        ref: "Institute"
    }

    

}, {timestamps: true, strict: false});


module.exports = mongoose.model('Input', inputSchema);