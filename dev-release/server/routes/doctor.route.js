

'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const PatientModel = mongoose.model('Patient'),
    visitModel = mongoose.model('Visit');
    // AlergyModel=mongoose.model('Alergy'),


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
//get patient by id
Router.get('/:id', (req, res) => {
    PatientModel.findById(req.params.id).populate('visits').exec().then(patient => {
        res.json(patient);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//post a patient
Router.post('/', (req, res) => {
    const patient = new PatientModel(req.body);
    patient.save().then(patient => {
        res.json(patient);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//add visit for a patient

Router.post('/:id/visits', (req, res) => {
    let visit = new visitModel(req.body);
    const patientID = req.params.id;
    var visitObjid;
    visit.patient = patientID;
    visit.save().then(visitDb => {
        visitObjid=visitDb._id;
        return PatientModel.findByIdAndUpdate(patientID, {$push: {"visits": visitDb._id}})
    }).then(() => {
        return visitModel.findById(visitObjid).exec();
    }).then(patientDb => {
        res.json(patientDb);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//add examination

Router.put('/examination/:id', (req, res) => {
    console.log(req.body);
    visitModel.findByIdAndUpdate(req.params.id, {$set: {"examination": req.body}}).exec().then(visit=>{
        res.send(status);
    }).catch(err=>{
        if (err)
            res.send(err)
    });
});
module.exports = Router;