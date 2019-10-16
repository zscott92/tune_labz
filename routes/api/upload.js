require("dotenv").config();

const AWS = require('aws-sdk');
const Busboy = require('busboy');

function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    Bucket: process.env.AWS_BUCKET,
  });
  s3bucket.createBucket(function () {
    var params = {
      Bucket: process.env.AWS_BUCKET,
      Key: file.name,
      Body: file.data
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        console.log('error in callback');
        console.log(err);
      }
      console.log('success');
      console.log(data);
    });
  });
}


module.exports = (app) => {
  const element1 = req.body.element1;
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', function () {
    alert('Upload Complete!'); 
    // {
    //   element2 = {
    //     data: element1,
    //     mimetype: 'audio/mpeg, audio/wav, audio/mp3',
    //     truncated: false
    //   }
    // }
    const file = req.files.element2;
    console.log(file);
    uploadToS3(file);
  });
  req.pipe(busboy);
}


