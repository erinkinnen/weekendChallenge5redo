var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/index.js');
var db = require('./modules/db.js');

app.set('port', (process.env.PORT || 2000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/', router);






app.listen(app.get('port'), function(){
  console.log("Listening on port: ", app.get('port'));
});

module.exports = app;
