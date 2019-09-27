const jwt = require("jsonwebtoken");

var createToken = function(auth) {
    return jwt.sign({
            id: auth.id
        }, 'my-secret',
        {
            expiresIn: 60 * 120
        });
};

module.exports = {
  generateToken: function(req, res, next) {
      req.token = createToken(req.auth);
      return next();
  },
  sendToken: function(req, res) {
      res.setHeader('x-auth-token', req.token);
      return res.status(200).json({
          id: req.user.id,
          user_email: req.user.user_email,
          user_name: req.user.user_name
      });
  }
};