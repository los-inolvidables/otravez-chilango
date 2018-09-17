var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('../database/index.js');

const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/forum', function(req, res){
  database.selectAll((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})

app.post('/forum', function(req, res){

 let description = req.body.description;
 let description2 = req.body.description2;

 if(!description) {
   res.sendStatus(400);
 } else {
   database.insertOne(description,description2,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});
//up is for the forun requests
// down is for the likes
app.get('/likes', function(req, res){
  database.selectLikes((err, results) => {
     if(err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})

app.post('/likes', function(req, res){
console.log(req.body)
 let gustos = req.body.likes;

 if(!gustos) {
   res.sendStatus(400);
 } else {
   database.insertLikes(gustos,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
