const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const Route = require("./routes/index");
const redis = require("redis"),
      client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes required for this app
Route(app);

app.get('/', function(req, res) {
    res.status(202).send({ message: 'This API supplies student details' })
});

app.get('*', function (req, res){
     response.status(404).send({message: 'The Route is invalid',})
});

app.post('*', function (req, res){ 
    response.status(404).send({message: 'The Route is invalid',})
});

app.put('*', function (req, res) {
    response.status(404).send({message: 'The Route is invalid',})
});

app.delete('*', function (req, res){ 
    response.status(404).send({message: 'The Route is invalid',})
});

module.exports = app;