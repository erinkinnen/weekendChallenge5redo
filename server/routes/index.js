console.log("index.js sourced");

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

var MovieSchema = mongoose.Schema({
  title: String,
  plot: String,
  favorite: Boolean
});

var Movie = mongoose.model('movie', MovieSchema, 'movie');

router.get('/movie', function(req,res){
    res.send('Grilled Cheese');
});

// BASE ROUTE
router.get('/', function(req,res){
    res.sendFile(path.resolve('server/public/views/index.html'));
});

// router.post('/search', function(req,res){
//
// });
//
// router.put('/data', function(req,res){
//
// });
//
// router.delete('/movie', function(req,res){
//
// });
//
// router.get('/', function(req,res){
//   res.sendFile(path.resolve('server/public/views/index.html'));
// });


module.exports = router;
