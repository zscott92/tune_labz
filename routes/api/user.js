const express = require('express');
const router = express.Router();

module.exports = function(router) {
router.post("/add", (req, res, next) => {
 
    const user = new User({
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

router.post("/delete", (req, res, next) => {
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

router.get("/list", (req, res, next) => {
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
