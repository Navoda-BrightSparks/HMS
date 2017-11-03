'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supModelSchema = new Schema({

    fname: {
        type: String

    },

    lname: {
        type: String
    },

    company: {
        type: String
    },
    address:{
        type:String
    },

    phoneNo: {
        type: String
    },

    email: {
        type: String

    },
    itemtype:{
        type: String
    }


});

module.exports = mongoose.model('supplier',supModelSchema);
