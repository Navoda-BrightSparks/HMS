

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const drugModel = mongoose.model('drugs');

const Router = express.Router();


Router.post('/drugRegistration', (req, res) => {
    var drug = new drugModel(req.body);
console.log("drug")
    console.log(req.body)
    drug.save().then(drug => {

        res.send(drug);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/',(req,res)=>{

    drugModel.find().exec().then(drug => {
        res.json(drug);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:id', (req, res) => {
    drugModel.findById(req.params.id).exec().then(drug => {
        res.json(drug);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});



Router.put('/drugupdate/:id', (req, res) => {

    drugModel.findByIdAndUpdate(req.params.id,req.body,{new: true}, function(err, drug) {
        if (err)
            res.send(err);

        res.send(drug)
    });
});




module.exports = Router;