/**
 * Created by kumaran on 24/09/2017.
 */

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const employeeModel = mongoose.model('userRole');

const Router = express.Router();


Router.post('/userRoleAdd', (req, res) => {
    var ur = new userRoleModel(req.body);
    ur.save().then(userRole => {
        console.log(userRole);
        res.json(userRole);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/',(req,res)=>{

    userRoleModel.find().exec().then(userRole => {
        res.json(userRole);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


Router.put('/employeeUpdate/:id', (req, res) => {
    userRoleModel.findById(req.params.id, function(err, userRole) {
        if (err)
            res.send(err);

        userRole.userRole = req.body.userRole;

        updateUserRole.save(function(err) {
            if (err)
                res.send(err);

            res.json(updateUserRole);
        });
    });
});



module.exports = Router;