const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const PatientModel = mongoose.model('Patient');


const Router = express.Router();


Router.post('/register', (req, res) => {
    var patient = new PatientModel(req.body);
    patient.save().then(patient => {
        console.log(patient.HIN);
        res.json(patient);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//edit patient
Router.put('/edit/:id', (req, res) => {

    PatientModel.findByIdAndUpdate(req.params.id,req.body,{new: true}, function(err, patient) {
        if (err)
            res.send(err);

res.send(patient)
    });
});
module.exports = Router;