require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const multer = require('multer')
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const WaveformData = require('waveform-data');;
const fs = require('fs');


// Requiring our models for syncing
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

let storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname )
    }
})

let upload = multer({ storage: storage }).single('file')


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));
}
var SpotifyWebApi = require('spotify-web-api-node');
var redirectUri = 'localhost:3001';
var scopes = ['user-top-read'];
var showDialog = true;


app.post('/upload',function(req, res) {
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)
    })
})

const WaveformData = require('waveform-data');
const express = require('express');
const fs = require('fs');
const app = express();
 
const WaveformData = require('waveform-data');
const request = require('superagent');
const args = require('yargs').argv;

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build"));
    })
}
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});