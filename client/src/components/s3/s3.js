const AWS = require('aws-sdk');
const fs = require('fs');
var s3 = new AWS.S3();
require("dotenv").config();
const filePath = './data/data.json';
const bucketName = process.env.AWS_BUCKET;
const key = fileKey;

s3 = (filePath, bucketName, key) => {
  fs.readFile(filePath, (err, data) => {
    if (err) console.error(err);
    var base64data = new Buffer(data, 'binary');
    var params = {
      Bucket: bucketName,
      Key: key,
      Body: base64data
    };
    s3.upload(params, (err, data) => {
      if (err) console.error(`Upload Error ${err}`);
      console.log('Upload Completed');
    });
  });
};
}
