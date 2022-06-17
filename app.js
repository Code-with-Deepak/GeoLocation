var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var db = require('./models/db').connect();
var storeDb = require('./routes/store');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',index);
app.use('/',storeDb);


app.listen(process.env.PORT,console.log("Server Started in "+process.env.PORT));