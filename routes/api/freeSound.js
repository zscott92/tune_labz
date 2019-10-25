require("dotenv").config();
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region : process.env.AWS_REGION
  });

module.exports = function(app) {

   app.get('/song_id', function(req,res){
    try {
        var trackID = new ObjectID(req.params.trackID);
      } catch(err) {
        return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
      }
      res.set('content-type', 'audio/mpeg');
      res.set('accept-ranges', 'bytes');

       let audioStream = s3.getObject({
         Bucket: process.env.AWS_BUCKET,
         Key: 'myimage.jpg'
       }).createReadStream();
    
     audioStream.pipe(res);
   });
}