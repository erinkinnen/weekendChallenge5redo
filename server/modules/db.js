console.log("db.js sourced");

var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/api_movies';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(error){
  console.log('MongoDB connection error: ', error);
});

MongoDB.once('open', function(){
  console.log("MongoDB connection open");
});

module.exports = MongoDB;
