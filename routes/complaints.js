var express = require('express');
var router = express.Router();
var multer = require('multer');

var Complaint = require('../model/database');

// data recieving 
router.get('/complaints', function(req, res, next){
    Complaint.find(function(err, complaints){
        if (err) {
            throw err;
        } else {
            res.json(complaints);
        }
    });
});

// Add complaints 
router.post('/complaints', function(req, res, next){
    var newComplaint = new Complaint({
        village: req.body.village,
        mandal: req.body.mandal,
        district: req.body.district,
        postalcode: req.body.postalcode,
        //date: req.body.date,
        //file: req.body.file,
        description: req.body.description
    });
    newComplaint.save(function(err, Complaint){
        if (err) {
            throw err;
        } else {
            res.json({msg: 'complaint added successfully'});
        }
    });
    //file uploading

    /*  var storage =   multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './images/');
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });
    var upload = multer({ storage : storage}).single('file');
    var sess;
    app.post('/upload',function(req,res){
        upload(req,res,function(err) {
            if(err) {
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
            //console.log(req.file.originalname);
            //connection.query("insert into carinfo(Carname,Carmodel,Enginesize,price,Image,pickupdate,returndate,place) values('" + req.body.carname + "','" + req.body.carmodel + "','" + req.body.enginesize + "','" + req.body.price + "','"+ "userPhoto-" +  req.file.originalname + "','" + req.body.pickupdate + "','" + req.body.returndate + "','" + req.body.place + "')")    
        });
    }); */
});

// deleting complaints 
router.delete('/complaints/:id', function(req, res, next){
    Complaint.remove({_id:req.params.id}, function(err, result){
        if (err) {
            throw err;
        } else {
            res.json(result);
        }
    });
});

router.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'anaresh7777@gmail.com',
            pass: 'naresh123'
        }
    });
    let mailOptions = {
        from: '"Naresh Aithagoni" <anaresh7777@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>Complaints</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('app-feedback');
        });
    });
module.exports = router;