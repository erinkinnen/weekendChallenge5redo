console.log("index.js sourced");

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.sendFile(path.resolve('server/public/views/index.html'));
});


module.exports = router;
