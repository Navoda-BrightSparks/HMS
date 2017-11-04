'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpecimanSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }





});

const speciman = mongoose.model('speciman', SpecimanSchema);

module.exports = speciman;

