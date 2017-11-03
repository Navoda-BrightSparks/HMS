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
})
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
