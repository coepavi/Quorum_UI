var express = require("express")
var app = express()
var body = require("body-parser")
var cors = require("cors")

app.use(body.urlencoded({extended:true}))
app.use(body.json());
app.use(cors())

app.use(function (req, res, next) {
      // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      next();
  });


app.get('/search/:id', function(req, res){
	console.log(req.params)
	console.log(typeof req.params.id)
	// console.log(req.query)
	var tid = Number(req.params.id)
	console.log("tid: ", req.params.id)
   res.json(tid)
})

app.post('/createTrade', function(req, res){
    console.log(req.body)
    res.json("Data inserted")
 })
 
app.listen(3000)
