
const mongoose = require('mongoose');
const user = require('./user')

mongoose
.connect(process.env.ATLAS_DB, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log("DB Connection Error: ${err.message}");
});

const childTrack = new mongoose.Schema({
    owner: [{ type: String, ref: 'Comment' }],
    trackInfo: [{
        type: String
    }],
})
    const trackSchema = new mongoose.Schema({
        owner: [{ type: String, ref: 'Comment' }],
        trackInfo: [{
            type: String
        }],
        childid: [childTrack],
    })
 
module.exports = mongoose.model('Track', trackSchema);
