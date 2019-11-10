require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const async = require('async');
const uri = process.env.ATLAS_DB;
const options = { use: MongoClient };

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

module.exports = 
    function autoPopulateSubs(next) {
    this.populate('subs');
    next();
}

const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    country: String,
    age: {
        type: Number,
        required: true,
    }
})

userSchema
    .pre('findOne', autoPopulateSubs)
    .pre('find', autoPopulateSubs);


const user = mongoose.model('user', userSchema);

function log(data) {
    console.log(JSON.stringify(data, undefined, 2))
}
