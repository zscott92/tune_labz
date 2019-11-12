require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;
const app = express();
const multer = require('multer')
const cors = require('cors')
const AWS = require('aws-sdk')
const mongoose = require('mongoose');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors())

const {
  generateGetUrl,
  generatePutUrl
} = require('./s3lambda');

require('./routes')(app);

// GET URL
app.get('/generate-get-url', (req, res) => {
  const { Key } = req.query;
  generateGetUrl(Key)
    .then(getURL => {      
      res.send(getURL);
    })
    .catch(err => {
      res.send(err);
    });
});

// PUT URL
app.get('/generate-put-url', (req,res)=>{
  const { Key, ContentType } =  req.query;
  generatePutUrl(Key, ContentType).then(putURL => {
    res.send({putURL});
  })
  .catch(err => {
    res.send(err);
  });
});



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

var redirectUri = 'localhost:3001';
var scopes = ['user-top-read'];
var showDialog = true;


// Add routes, both API

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build"));
  })
}


  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
