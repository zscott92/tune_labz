var AWS = require("aws-sdk");

module.exports = function(app) {
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: '<access_key>',
  secretAccessKey: '<secret_key>'
})

export const s3 = new AWS.S3({
  params: {
    Bucket: 'BUCKETNAME'
  },
  apiVersion: '2006-03-01',
});

export const list_ = s3.listObjects({Delimiter: '/invoice/'}, function(err, data) {
  if (err) {
    return alert('There was an error listing your objects: ' + err.message);
  } else {
    console.log(data)
  }
});

}