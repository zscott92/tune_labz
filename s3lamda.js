require("dotenv").config();
const fs = require('fs')
const AWS = require('aws-sdk')
const express = require('express');
const app = express();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})


// Create S3 service object

// call S3 to retrieve upload file to specified bucket
// 

// Configure the file stream and obtain the upload parameters





//   let uploadParams = {
//     Bucket: bucket,
//     Key: key,
//     Body: passThrough
//   };




module.exports = function(app){
fs.readFile(fileName, (err, data) => {
    console.log(data)
    let obj = JSON.parse(data);
    
    // console.log(fileName)
    if (err) throw err;
    const params = {
        Bucket: 'tunechains',
        Key: fileName,
        Body: JSON.stringify(data, null, 2)
    };
    s3.upload(params, function(err, data) {
        if(err) throw err;
        console.log(`File uploaded successfully at ${data.Location}`)
    });
})
}