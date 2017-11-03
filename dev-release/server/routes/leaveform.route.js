/**
 * Created by kumaran on 24/09/2017.
 */

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const leaveModel = mongoose.model('leaveform');

const Router = express.Router();


Router.post('/leaveformManage', (req, res) => {
    var leave = new leaveModel(req.body);
    leave.save().then(leave => {
        console.log(leave);
        res.json(leave);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/',(req,res)=>{

    leaveModel.find().exec().then(leave => {
        res.json(leave);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


Router.put('/employeeUpdate/:id', (req, res) => {
    leaveModel.findById(req.params.id, function(err, leave) {
        if (err)
            res.send(err);

        leave.leave = req.body.leave;

        updateLeave.save(function(err) {
            if (err)
                res.send(err);

            res.json(updateLeave);
        });
    });
});



module.exports = Router;
