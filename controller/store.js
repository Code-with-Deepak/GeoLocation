var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    user:{type:String},
    email:{type:String},
    dno:{type:String},
    street:{type:String},
    city:{type:String},
    pin:{type:String},
    lat:{type:String},
    lon:{type:String},
    accuracy:{type:String},
});

module.exports = mongoose.model("user",userSchema);