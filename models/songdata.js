const mongoose = require('mongoose');

const trackSchema = mongoose.model('User', userSchema);
    const trackSchema = new mongoose.Schema({
        owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        trackInfo: [{
            type: String
        }],
        childid: [childSchema],
    })
 
module.exports = mongoose.model('Track', trackSchema);
