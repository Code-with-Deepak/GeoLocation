var express = require('express');
var router = express.Router();
var stores = require('../controller/store');

router.post('/storeLoc', function(req,res) {
    var username = req.body.username || req.query.username;
    var latitude = req.body.lat || req.query.lat;
    var longitude = req.body.lon || req.query.lon;
    console.log(latitude,longitude);
    if(stores.create({
        "user":username,
        "lat":latitude,
        "lon":longitude,
    }))
    {
        console.log("created");
        res.send("Created");
    }
    else{
    console.log("err");
    res.send("Error");
    }
});

module.exports = router;
