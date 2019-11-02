require("dotenv").config();
const fs = require('fs')
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const fileName = 'test.mp3';

fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(data)
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
