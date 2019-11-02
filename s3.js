const getContentType = (event) => {
    const contentType = event.headers['content-type']
    if (!contentType) {
        return event.headers['Content-Type'];
    }
    return contentType;
};

const parser = (event) => new Promise((resolve, reject) => {
    const busboy = new Busboy({
        headers: {
            'content-type': getContentType(event)
        }
    });

    const result = {};

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        file.on('data', data => {
            result.file = data;
        });

        file.on('end', () => {
            result.filename = filename;
            result.contentType = mimetype;
        });
    });

    busboy.on('field', (fieldname, value) => {

        result[fieldname] = value;
    });

    busboy.on('error', error => reject(error));
    busboy.on('finish', () => {
        event.body = result;
        resolve(event);
    });

    busboy.write(event.body, event.isBase64Encoded ? 'base64' : 'binary');
    busboy.end();
});

const uploadFile = (buffer) => new Promise((resolve, reject) => {
    const bucketName = "YOUR-BUCKET-NAME";
    const fileName =  "YOUR-FILE-NAME.EXTENSION";
    const data = {
        Bucket: bucketName,
        Key: fileName,
        Body: buffer,
    };
    s3.putObject(data, (error) => {
                if (!error) {
                    resolve('success');
                } else {
                    reject(new Error('error during put'));
                }
            });
    });

    export async function main(event, context, callback) {
        parser(event).then(() => {
             uploadFile(event.body.file)
                         .then(() => {
                          console.log("success")
                         })
                         .catch(() => {
                            console.log("error")
                         });
                 });
     };