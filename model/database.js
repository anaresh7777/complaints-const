//import { String } from 'core-js/library/web/timers';

var mongoose = require('mongoose');
 


var complaintSchema = mongoose.Schema({
    village: {
        type: String
    },
    mandal: {
        type: String
    },
    district: {
        type: String
    },
    postalcode: {
        type: String
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
        type: String
    } 
});

var Complaint = module.exports = mongoose.model('Complaint', complaintSchema);