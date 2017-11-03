/**
 * Created by kumaran on 24/09/2017.
 */

'use strict';

 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const empModelSchema = new Schema({

 fname: {
 type: String

 },

 lname: {
 type: String
 },

 joinDate: {
 type: Date
 },

 phoneNo: {
 type: String
 },

 email: {
 type: String

 },

 NIC: {
 type: String

 },

 age: {
 type: Number,

 },
     gender: {
         type: String

     }

 });

 module.exports = mongoose.model('employee',empModelSchema);

