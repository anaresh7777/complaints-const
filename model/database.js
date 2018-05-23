//import { String } from 'core-js/library/web/timers';

var mongoose = require('mongoose');
 


var complaintSchema = mongoose.Schema({
    village: {
        type: String,
        required: true
    },
    mandal: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      },
    description: {
        type: String,
        required: true
    } 
});

var Complaint = module.exports = mongoose.model('Complaint', complaintSchema);