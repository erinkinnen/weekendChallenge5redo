console.log("index.js sourced");

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var MovieSchema = mongoose.Schema({
  title: String,
  plot: String,
  year: String
});

var Movie = mongoose.model('movie', MovieSchema, 'movie');

router.get('/movie', function(req,res){

});

router.post('/search', function(req,res){

});

router.put('/data', function(req,res){

});

router.delete('/movie', function(req,res){

});

router.get('/', function(req,res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});


module.exports = router;
