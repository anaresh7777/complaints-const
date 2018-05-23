//import { Mongoose } from 'mongoose';


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');

var index = require('./routes/index');
var complaints = require('./routes/complaints');

var port = 3000;

var app = express();

// connect to MongoDB
mongoose.connect('mongodb://naresh:naresh@ds119258.mlab.com:19258/peoplecomplaints', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
});

// View engine
/*
app.set('views', __dirname + 'src');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); */

// set static folder to put all Angular files

app.use(express.static(path.join(__dirname, 'src')));

app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', complaints);

app.listen(port, function(){
    console.log(' Server listening on ' + port);
});

