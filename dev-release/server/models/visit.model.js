'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    complaint: {
        type: String
    },
        visitType: {
            type: String
        },
    vid: {
        type: String,
        unique: true
    },
        date: {
             type:Date
       },
    remarks: {
        type: String
    },
      examination:{
          weight: {
              type: Number
          },
          height: {
              type: Number
          },
          BMI:{
              type:Number
          },
          temperature:{
              type:Number
          },
          sBP:{
              type:Number
          }
          ,
          dBP:{
              type:Number
          }
      },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
laborders:[{
    testName: {
        type: String
    },
    priority: {
        type: String
    },
    duedate:{
        type:Date
    },
    comment:{
        type:String},
    result:{
        type:String
    },
    verify:{
        type:Boolean,default:false
    }

    }
]
,
    prescription:[{
        drugname: {
            type: String
        },
        frequency: {
            type: String
        },
        Period:{
            type:String
    }



    }],
});

const Visit = mongoose.model('Visit', VisitSchema);

module.exports = Visit;
