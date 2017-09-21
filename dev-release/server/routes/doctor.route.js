'use strict';

 const express = require('express'),
     mongoose = require('mongoose');

 mongoose.set('debug', false);

 const PatientModel = mongoose.model('Patient');



 const Router = express.Router();
//patients
 Router.get('/', (req, res) => {
     if(req.query.hin){
         PatientModel.find({HIN:req.query.hin}).populate('Alergies').populate('visits').exec().then(patient => {
             res.json(patient || {});
         }).catch(err => {
             console.error(err);
             res.sendStatus(500);
         });
     }
   else  if(req.query.nic){
         PatientModel.find({NIC:req.query.nic}).populate('Alergies').populate('visits').exec().then(patient => {
             res.json(patient || {});
         }).catch(err => {
             console.error(err);
             res.sendStatus(500);
         });

     } else  if(req.query.visitid){
         visitModel.findById(req.query.visitid).exec().then(visit => {
             res.json(visit);
         }).catch(err => {
             console.error(err);
             res.sendStatus(500);
         });

     }else if(req.query.criteria==='last50'){
         PatientModel.find().
         limit(50).
         sort({ _id: -1 }).
         select({ name: 1, occupation: 1,
             HIN:1, firstName:1, NIC:1, phone:1, Birthday:1, Address:1}).then(patients => {
             res.json(patients);
         }).catch(err => {
             console.error(err);
             res.sendStatus(500);
         });
     }
     else{
         PatientModel.find().populate('Alergies').populate( 'visits').exec().then(patients => {
             res.json(patients);
         }).catch(err => {
             console.error(err);
             res.sendStatus(500);
         });
     };

 });




 module.exports = Router;