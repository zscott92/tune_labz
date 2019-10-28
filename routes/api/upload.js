
import Models from '../../models';
const express = require('express');
const app = express();
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var fs = require('fs');
const ObjectID = require('mongodb').ObjectID;

module.exports = function(app){
app.post("/add", (req, res, next) => {
 
  const track = new User({
      _id: mongoose.Types.ObjectId(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      country: req.body.country,
      age: req.body.age,
  })

  user.save()
  .then(result => {
      res.status(200).json({
          docs:[user]
      });
  })
  .catch(err => {
      console.log(err);
  });
});

app.post("/delete", (req, res, next) => {
  const rid = req.body.id;

  User.findById(rid)
      .exec()
      .then(docs => {
          docs.remove();
          res.status(200).json({
              deleted:true
          });
      })
      .catch(err => {
          console.log(err)
      });
});

app.get("/list", (req, res, next) => {
  User.find({})
      .exec()
      .then(docs => {
          res.status(200).json({
              docs
          });
      })
      .catch(err => {
          console.log(err)
      });
});
}
  