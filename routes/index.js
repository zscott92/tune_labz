// const path = require("path");
// const router = require("express").Router();
// // const apiRoutes = require("./api");
// var { generateToken, sendToken } = require('../utils/token.utils');
// var passport = require('passport');
// require('../passport')();

// router.route('/auth/google')
//   .post(passport.authenticate('google-token', { session: false }), function (req, res, next) {
//     if (!req.user) {
//       return res.send(401, 'User Not Authenticated');
//     }
//     req.auth = {
//       id: req.user.id
//     };

//     next();
//   }, generateToken, sendToken);

// // API Routes
// // router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// module.exports = router;


