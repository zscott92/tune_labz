const {GetTree} = require("patternfly-bootstrap-treeview");
const fileUploads = require("./fileUploadApi");
const sampleUploads = require("./samplesApi");
const spotifyUploads = require("./spotifyApi");
const wavTransfers = require("./wavTransferApi");

//when one of the file transfers is clicked then pull from API normalize before inserting into database
//would like to have a way to sample the track without it hitting the db...we'll see

module.exports = {
    GetTree: <GetTree />
}