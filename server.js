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
<<<<<<< HEAD
// var busboy = require("connect-busboy");
=======
const api = express();

>>>>>>> ff032e180d319352dd7abab8c7fa67aca64ec636
var s3router= require('react-dropzone-s3-uploader');
const upload = require('./s3lamda');

const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// const { Readable } = require('stream');
<<<<<<< HEAD
// const db = require("./models");
=======
>>>>>>> ff032e180d319352dd7abab8c7fa67aca64ec636


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
<<<<<<< HEAD
app.use(upload);
// app.engine('html', require('ejs').renderFile);
// app.use(routes);
=======
app.use(upload, trackRoute);
app.use('/api/v1/', api);

let db;
MongoClient.connect(process.env.ATLAS_DB, (err, database) => {
  if (err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  db = database;
});
>>>>>>> ff032e180d319352dd7abab8c7fa67aca64ec636


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
