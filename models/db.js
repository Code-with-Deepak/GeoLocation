var mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect("mongodb+srv://Dbuser:deepak2002@cluster0.eylfl.mongodb.net/GeoLoc?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };