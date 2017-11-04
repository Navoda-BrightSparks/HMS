'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoleSchema = new Schema({

    urole: {
        type: String,
    },

    description: {
        type: String,
    },
});

module.exports = mongoose.model('userRole',RoleSchema);

