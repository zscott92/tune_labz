require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const multer = require('multer')
// const tracks = require('./routes/api/upload');
const trackRoute = express.Router();
const path = require('path');
const AWS = require('aws-sdk')
var busboy = require("connect-busboy");
var s3router= require('react-dropzone-s3-uploader');


// const mongodb = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// const { Readable } = require('stream');
const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.use(routes);
app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
  bucket: 'MyS3Bucket',                           // required
  region: 'us-east-1',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'private',                                 // this is the default - set to `public-read` to let anyone view uploads
}));

// app.post("/upload", function(req, res) {
//   if(req.busboy) {
//       req.busboy.on("file", function(fieldName, fileStream, fileName, encoding, mimeType) {
//         console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
//         var s3 = new AWS.S3({
//            params: {Bucket: process.env.AWS_BUCKET, Key: filename, Body: file},
//            options: {partSize: 5 * 1024 * 1024, queueSize: 10}   // 5 MB
//         });
//         s3.upload().on('httpUploadProgress', function (evt) {
//            console.log(evt);
//         }).send(function (err, data) {
//            s3UploadFinishTime = new Date();
//            if(busboyFinishTime && s3UploadFinishTime) {
//               res.json({
//                  uploadStartTime: uploadStartTime,
//                  busboyFinishTime: busboyFinishTime,
//                  s3UploadFinishTime: s3UploadFinishTime
//               });
//            }
//            console.log(err, data);
//         });
//      });
//       return req.pipe(req.busboy);
//   }
//   //Something went wrong -- busboy was not loaded
// });




// let db2;
// MongoClient.connect(process.env.AZURE_URI, (err, database) => {
//   if (err) {
//     console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
//     process.exit(1);
//   }
//   db2 = database;
// });


// app.use('/tracks', trackRoute);
// trackRoute.get('/:trackID', (req, res) => {
//   try {
//     var trackID = new ObjectID(req.params.trackID);
//   } catch(err) {
//     return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
//   }
//   res.set('content-type', 'audio/mp3');
//   res.set('accept-ranges', 'bytes');

//   let bucket = new mongodb.GridFSBucket(db, {
//     bucketName: 'tracks'
//   });

//   let downloadStream = bucket.openDownloadStream(trackID);

//   downloadStream.on('data', (chunk) => {
//     res.write(chunk);
//   });

//   downloadStream.on('error', () => {
//     res.sendStatus(404);
//   });

//   downloadStream.on('end', () => {
//     res.end();
//   });
// });

// app.post('/', (req, res) => {
//   const storage = multer.memoryStorage()
//   const upload = multer({ storage: storage, limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }});
//   upload.single('track')(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ message: "Upload Request Validation Failed" });
//     } else if(!req.body.name) {
//       return res.status(400).json({ message: "No track name in request body" });
//     }

//     let trackName = req.body.name;

//     const readableTrackStream = new Readable();
//     readableTrackStream.push(req.file.buffer);
//     readableTrackStream.push(null);

//     let bucket = new mongodb.GridFSBucket(db, {
//       bucketName: 'tracks'
//     });

//     let uploadStream = bucket.openUploadStream(trackName);
//     let id = uploadStream.id;
//     readableTrackStream.pipe(uploadStream);

//     uploadStream.on('error', () => {
//       return res.status(500).json({ message: "Error uploading file" });
//     });

//     uploadStream.on('finish', () => {
//       return res.status(201).json({ message: "File uploaded successfully, stored under Mongo ObjectID: " + id });
//     });
//   });
// });
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

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});