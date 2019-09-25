'use strict';

const passport = require('passport');
const db = require("./models");
const GoogleTokenStrategy = require('passport-google-token').Strategy;

module.exports = function () {

    passport.use(new GoogleTokenStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGlE_CLIENT_SECRET
        },
        function (accessToken, refreshToken, profile, done) {
            db.User.upsertGoogleUser(accessToken, refreshToken, profile, function(err, user) {
                return done(err, user);
            });
        }));
};