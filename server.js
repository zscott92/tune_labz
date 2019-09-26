require("dotenv").config();
const routes = require("./routes");
const multer = require('multer')
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const request = require('superagent');
const args = require('yargs').argv;
const express = require('express');
require("dotenv");

const app = express();


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

var redirectUri = 'localhost:3001';
var scopes = ['user-top-read'];






  
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

