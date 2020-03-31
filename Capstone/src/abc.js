var express = require("express")
var app = express()
var body = require("body-parser")

app.get('/', function(req, res){
    res.sendFile('abc.html', { root: __dirname})
});

app.get('/getdata', function(req, res){
    console.log("data", req.query)
    res.send("Data received")
})

app.listen(3000);