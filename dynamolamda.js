var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(event, context) {
    var file_path = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    var filename = file_path.split("/")[0];

    var params = {
        TableName: 'tunelabz',
        Item: {
            owner: owner,
            file: filename,
            file_path: file_path
        }
    };

    dynamo.put(params, context.done);
};