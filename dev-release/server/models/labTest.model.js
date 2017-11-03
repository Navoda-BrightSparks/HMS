/**
 * Created by admin on 9/20/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labTestSchema = new Schema({
    name: {
        type: String
    },
    Category:{
        type: String
    }, minAge:{
        type: Number
    }, maxAge:{
        type: Number
    },
    unit:{
        type: String
    }



});

const labTest = mongoose.model('labTest', labTestSchema);

module.exports = labTest;

