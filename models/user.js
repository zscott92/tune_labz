const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('User', userSchema);