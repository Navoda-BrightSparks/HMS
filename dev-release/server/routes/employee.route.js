/**
 * Created by kumaran on 24/09/2017.
 */

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const employeeModel = mongoose.model('employee');

const Router = express.Router();


Router.post('/employeeRegistration', (req, res) => {
    var employee = new employeeModel(req.body);
    employee.save().then(employee => {
        console.log(employee);
        res.json(employee);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/',(req,res)=>{

    employeeModel.find().exec().then(employee => {
        res.json(employee);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


Router.put('/employeeUpdate/:id', (req, res) => {
    employeeModel.findById(req.params.id, function(err, employee) {
        if (err)
            res.send(err);

        employee.employee = req.body.employee;

        updateEmployee.save(function(err) {
            if (err)
                res.send(err);

            res.json(updateEmployee);
        });
    });
});



module.exports = Router;