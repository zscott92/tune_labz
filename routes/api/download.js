require('dotenv').config();

module.exports = function download (key) {
    return new Promise((resolve, reject) => {
      const destPath = `/tmp/${path.basename(key)}`
      const params = { Bucket: process.env.AWS_BUCKET, Key: key }
      const s3Stream = s3.getObject(params).createReadStream();
      const fileStream = fs.createWriteStream(destPath);
      s3Stream.on('error', reject);
      fileStream.on('error', reject);
      fileStream.on('close', () => { resolve(destPath);});
      s3Stream.pipe(fileStream);
    });
  }


