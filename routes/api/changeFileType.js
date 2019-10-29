// const express = require('express');
// const router = express.Router();
// const api = express();
// const AWS = require('aws-sdk')
// const stream = require('stream');
// const { writeStream, promise } = uploadStream({Bucket: 'yourbucket', Key: 'yourfile.mp4'});
// const readStream = fs.createReadStream('/path/to/yourfile.mp4');

// module.exports = function (app) {

//   router.post('/track', (req, res, err) => {
// const uploadStream = ({ Bucket, Key }) => {
//   const s3 = new AWS.S3();
//   const pass = new stream.PassThrough();
//   return {
//     writeStream: pass,
//     promise: s3.upload({ Bucket, Key, Body: pass }).promise();
//   }
//   readStream.pipe(writeStream);
//   promise.then(console.log);
// })
//   }