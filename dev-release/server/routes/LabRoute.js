const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const SpecimanModel = mongoose.model('speciman');
const labTest = mongoose.model('labTest');
visitModel = mongoose.model('Visit');
const PatientModel = mongoose.model('Patient');
const Router = express.Router();

//insert specimen
Router.post('/specimen', (req, res) => {
    var specimen = new SpecimanModel(req.body);
    specimen.save().then(specimen => {
        console.log(specimen);
        res.json(specimen);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
//get specimen
Router.get('/specimen',(req,res)=>{

    SpecimanModel.find().exec().then(specimens => {
        res.json(specimens);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//update specimen
Router.put('/editSpecimen/:id', (req, res) => {

    SpecimanModel.findByIdAndUpdate(req.params.id,req.body,{new: true}, function(err, specimen) {
        if (err)
            res.send(err);

        res.send(specimen)
    });
});

//delete specimen
Router.delete('/removeSpecimen/:id', (req, res) => {
console.log(req.params.id);
    SpecimanModel.findByIdAndRemove(req.params.id)
        .then(() => {
            res.sendStatus(200);
        }).catch(err => {

        res.sendStatus(500);
    });
});
Router.post('/labTest', (req, res) => {
    var labTestmodel = new labTest(req.body);
    labTestmodel.save().then(labTest => {
        console.log(labTest);
        res.json(labTest);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/labTest',(req,res)=>{

    labTest.find().exec().then(labTest => {
        res.json(labTest);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//get lab test names
Router.get('/LabTestNames',(req,res)=>{

    labTest.find({}, ' -_id name').exec().then(labTest => {
        res.json(labTest);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
// get lab orders
var orderarray=[];
Router.get('/labOrders',(req,res)=>{

    visitModel.find({},'laborders patient vid'
        ).populate('patient' ,'HIN -_id').exec().then(orders => {


        res.json(orders)




    }).catch(err => {
        console.error(err);
        res.sendStatus(500);


    });
});


//delete labtest
Router.delete('/removeLabTest/:id', (req, res) => {

    labTest.findByIdAndRemove(req.params.id)
.then(() => {
    res.sendStatus(200);
}).catch(err => {

    res.sendStatus(500);
});


});
//update labtest
Router.put('/editlabTest/:id', (req, res) => {

    labTest.findByIdAndUpdate(req.params.id,req.body,{new: true}, function(err, labtest) {
        if (err)
            res.send(err);

        res.send(labtest)
    });
});
module.exports = Router;
