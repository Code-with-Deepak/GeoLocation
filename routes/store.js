var express = require('express');
var router = express.Router();
var stores = require('../controller/store');

router.post('/storeLoc', function(req,res) {
    var username = req.body.username || req.query.mobile;
    var email  =req.body.email;
    var dno = req.body.dno;
    var street  =req.body.street;
    var city = req.body.city;
    var pin = req.body.pin;
    var latitude = req.body.lat || req.query.lat;
    var longitude = req.body.lon || req.query.lon;
    var accuracy = req.body.accuracy;
    console.log(latitude,longitude);
    if(stores.create({
        "user":username,
        "email":email,
        "dno":dno,
        "street":street,
        "city":city,
        "pin":pin,
        "lat":latitude,
        "lon":longitude,
        "accuracy":accuracy,
    }))
    {
        console.log("created");
        res.redirect('/error');
    }
    else{
    console.log("err");
    res.send("Error");
    }
});

module.exports = router;
