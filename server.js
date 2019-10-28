require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const upload = require("./routes/api/upload");
const PORT = process.env.PORT || 3001;
const app = express();
const multer = require('multer')

const trackRoute = express.Router();
const path = require('path');
const AWS = require('aws-sdk')

var s3router= require('react-dropzone-s3-uploader');


// const mongodb = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// const { Readable } = require('stream');
const db = require("./models/track");


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(upload);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}
// var SpotifyWebApi = require('spotify-web-api-node');

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
