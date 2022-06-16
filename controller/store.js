var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    user:{type:String},
    lat:{type:String},
    lon:{type:String},
});

module.exports = mongoose.model("user",userSchema);