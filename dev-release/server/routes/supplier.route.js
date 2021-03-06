

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const supplierModel = mongoose.model('supplier');

const Router = express.Router();


Router.post('/supplierRegistration', (req, res) => {
    var supplier = new supplierModel(req.body);
    console.log(supplier)
    supplier.save().then(supplier => {
        console.log(supplier);
        res.send(supplier);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/',(req,res)=>{

    supplierModel.find().exec().then(supplier => {
        res.json(supplier);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/:id', (req, res) => {
    supplierModel.findById(req.params.id).exec().then(supplier => {
        res.json(supplier);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});



Router.put('/supplierupdate/:id', (req, res) => {

    supplierModel.findByIdAndUpdate(req.params.id,req.body,{new: true}, function(err, supplier) {
        if (err)
            res.send(err);

        res.send(supplier)
    });
});




module.exports = Router;