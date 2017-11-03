/**
 * Created by kumaran on 24/09/2017.
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema({

    employee: {
        type: String

    },

    nic: {
        type: String
    },

    leavetype: {
        type: String
    },

    subject: {
        type: String
    },

    leavefrom: {
        type: String
    },

    leavetill: {
        type: String

    },

    noofdays: {
        type: String

    },



});

module.exports = mongoose.model('leaveform',leaveSchema);

