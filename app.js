var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var db = require('./models/db').connect();
var storeDb = require('./routes/store');
app.set('view engine','ejs');
var cors = require('cors');

app.use(cors());
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',index);
app.use('/',storeDb);

const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log("Server Started in "+PORT));