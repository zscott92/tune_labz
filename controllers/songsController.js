const db = require("../models");

// Defining methods for the songsController
module.exports = {
  //finds all songs for specific user id
  findAll: function (req, res) {
    db.Song
      .findAll({
        where: {
          user_id: req.params.id,
        }
        // ,
        // include: [{
        //   model: db.Song,
        //   as: "children"
        // }]
      })
      .then(dbModel =>
        res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // ,
  // findById: function (req, res) {
  //   db.Song
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   db.Song
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Song
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Song
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
