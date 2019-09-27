    require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require("./routes");


const PORT = process.env.PORT || 3001;

const app = express();

// Requiring our models for syncing
var db = require("./models");

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));
}
var SpotifyWebApi = require('spotify-web-api-node');

var redirectUri = 'localhost:3001';
var scopes = ['user-top-read'];
var showDialog = true;


// Add routes, both API
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build"));
    })
}

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});