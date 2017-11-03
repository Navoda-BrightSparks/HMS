

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const supplierModel = mongoose.model('supplier');

const Router = express.Router();


Router.post('/supplierRegistration', (req, res) => {
    var supplier = new supplierModel(req.body);
    supplier.save().then(supplier => {
        console.log(supplier);
        res.json(supplier);
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
    supplierModel.findById(req.params.id, function(err, supplier) {
        if (err)
            res.send(err);

        supplier.supplier = req.body.supplier;

        updatesupplier.save(function(err) {
            if (err)
                res.send(err);

            res.json(updatesupplier);
        });
    });
});



module.exports = Router;