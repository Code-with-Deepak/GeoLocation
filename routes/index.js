var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/lucky',function(req,res){
  res.render('whatappclone');
})

router.get('/error',function(req,res){
  res.render('error');
})
module.exports = router;
