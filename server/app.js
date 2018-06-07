// import files and packages up here
var express = require("express");
var morgan = require("morgan");
var data = require("./data.json")



// create your express server below
var app = express();

app.use(morgan('dev'));

// add your routes and middleware below
app.get('/', function(req, res) {
    res.send("hello world")
  });

app.get('/data', function(req, res) {
    res.json(data);
  });
  
// finally export the express application
module.exports = app;

