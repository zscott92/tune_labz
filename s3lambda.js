require('dotenv').config();
const AWS = require('aws-sdk');

// Configuring AWS
AWS.config = new AWS.Config({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const Bucket = process.env.AWS_BUCKET;

function generateGetUrl(Key) {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket,
      Key,
      Expires: 120
    };
    s3.getSignedUrl('getObject', params, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
}

function generatePutUrl(Key, ContentType) {
  return new Promise((resolve, reject) => {
    const params = { Bucket, Key, ContentType };
    s3.getSignedUrl('putObject', params, function(err, url) {
      if (err) {
        reject(err);
      }
      resolve(url);
    });
  });
}

module.exports = { generateGetUrl, generatePutUrl };