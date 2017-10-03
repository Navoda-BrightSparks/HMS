/**
 * Created by kumaran on 23/09/2017.
 */
/*'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const userRoleModel = mongoose.model('userrole');



const Router = express.Router();

Router.get('/', (req, res) => {
    if(req.query.hin){
        userRoleModel.find({HIN:req.query.hin}).populate('qualification').exec().then(userrole => {
            res.json(userrole || {});
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




module.exports = Router;*/