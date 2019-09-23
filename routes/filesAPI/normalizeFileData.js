
const {Howl} = require("./fileUploadApi");
const {freesounds} = require("./samplesApi");
const spotifyApi =("./spotifyApi");
const {wavTransfers} = require("./wavTransferApi");

//when one of the file transfers is clicked then pull from API normalize before inserting into database
//would like to have a way to sample the track without it hitting the db...we'll see

module.exports = {
    fileUploads: function () {
        return Howl;
    },
    sampleUploads: function () {
        return freesounds;
    },
    spotifyAPI: function () {
        return AudioContext;
    },
    wavTransfers: function () {
        return PeriodicWave;
    }
    
}