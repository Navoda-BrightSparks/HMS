
'use strict';
const Queue = require('queuejs');
var queue = new Queue();
var opdNo=0;

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var patient=require('./server/models/patient.model');
var specimen=require('./server/models/SpecimanceModel');
var employee=require('./server/models/employee.model');
var visit=require('./server/models/visit.model');
var supplier=require('./server/models/supplier.model');
var drug=require('./server/models/drug.model');

const  DRoute=require('./server/routes/doctor.route.js');
const  NRoute=require('./server/routes/nurse.route.js');
const LabRoute=require('./server/routes/LabRoute');
const EmployeeRoute=require('./server/routes/employee.route.js');
const SupplierRoute=require('./server/routes/supplier.route.js');
const DrugRoute=require('./server/routes/drugs.route.js');


const app = express();

app.use('/', express.static(__dirname+'/public'));
app.use('/modules', express.static(__dirname+'/../bower_components'));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/PatientProfile', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/patients',DRoute);
app.use('/patients',NRoute);
app.use('/Lab',LabRoute);
app.use('/employee',EmployeeRoute);
app.use('/supplier',SupplierRoute);
app.use('/drug',DrugRoute);


//queue
app.put('/queue',(req, res, next) => {
    console.log("Enqueue");
    var p={"name":req.query.name,"hin":req.query.hin,"id":req.query.id};
    queue.enq(p);
    opdNo++;
    res.send({status:200,opdNo:opdNo});
});

app.get('/queue',(req, res, next) => {
    if(req.query.peek){
        if(!queue.isEmpty()){
            var patient=queue.peek();
            res.json(patient);
        }else{
            res.send('empty');
        }
    }else{
        if(!queue.isEmpty()){
            var patient=queue.deq();
            res.json(patient);
        }else{
            res.send('empty');
        }
    }
});
//end queue
app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});

module.exports=app;