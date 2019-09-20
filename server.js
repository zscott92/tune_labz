const express = require("express");
// const mongoose = require("mongoose");
const mysql = require("mysql");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use(express.static("./client/public"));

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});



// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
