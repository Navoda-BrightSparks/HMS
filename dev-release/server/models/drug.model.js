'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drugModelSchema = new Schema({



    drugno: {
        type: String
    },

    drugname: {
        type: String
    },
    drugtype:{
        type:String
    },
    unitprice:{
        type:String
    }



});

module.exports = mongoose.model('drugs',drugModelSchema);
