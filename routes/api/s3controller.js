const aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
    region: process.env.AWS_REGION,
    accessKey: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

const bucket = process.env.AWS_BUCKET;

exports.sign_s3 = (req, res) => {
    const s3 = new aws.s3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;

    let parameters = {
        Bucket: bucket,
        Key: fileName,
        Expires: 500,
        ContentType: fileType,
        ACL: 'FULL_CONTROL'
    }

    s3.getSignedUrl('putObject', parameters, (err, data) => {
        if(err) {
            console.error(err);
            res.json({success: false, error: err})
        }
        
        let returnData = {
            signedRequest: data,
            url: 'https://tunechains.s3.amazonaws.com/${fileName}'
        };
        
        res.json({success:true, data: {returnData}});
    })
}