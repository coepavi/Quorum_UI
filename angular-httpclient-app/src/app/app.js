var express = require('express');
var cors = require('cors')
var app = express();
var body = require('body-parser')
app.use(cors())

app.use(body.urlencoded({extended:true}))
app.use(body.json());

app.use(function (req, res, next) {
      // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      next();
  });

app.post('/employees', function(req, res){
    console.log('Data received')
    console.log(req.body)
    res.json(req.body);
})

app.get('/getemployees', function(req, res){
    console.log('Getting records')
    console.log(req.query)
    res.send("Sending GET!!")
})

app.listen(3000);