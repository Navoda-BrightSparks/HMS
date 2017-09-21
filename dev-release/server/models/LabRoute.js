const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const SpecimanModel = mongoose.model('speciman');
const labTest = mongoose.model('labTest');

const Router = express.Router();


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
Router.get('/specimen',(req,res)=>{

    SpecimanModel.find().exec().then(specimens => {
        res.json(specimens);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
})


Router.put('/specimen/:id', (req, res) => {
    SpecimanModel.findById(req.params.id, function(err, specimen) {
        if (err)
            res.send(err);

        specimen.speciman = req.body.speciman;

        updateSpecimen.save(function(err) {
            if (err)
                res.send(err);

            res.json(updateSpecimen);
        });
    });
});



Router.post('/labTest', (req, res) => {
    var labTest = new labTest(req.body);
    labTest.save().then(labTest => {
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
})

module.exports = Router;
