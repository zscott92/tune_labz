
const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var fs = require('fs');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router();

module.exports = 
    router.post("/addTrack", (req, res, next) => {

        // const track = new trackSchema({
        //     owner: [req.props.owner],
        //     trackInfo: [req.props.track],
        //     childid: [childTrack],
        // })

    track.save()
        .then(result => {
            res.status(200).json({
                docs: [track]
            });
        })
        .catch(err => {
            console.log(err);
        })
    });

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    track.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted: true
            });
        })
        .catch(err => {
            console.log(err)
        });
});

router.get("/list", (req, res, next) => {
    track.find({})
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            console.log(err)
        });
})


