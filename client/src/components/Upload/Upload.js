import React, { Component } from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import { Stitch } from 'mongodb-stitch-server-sdk';
import { AwsServiceClient, AwsRequest } from 'mongodb-stitch-browser-services-aws';

require("dotenv").config()

class Upload extends Component {
  constructor(props) {
    super(props)
    this.appId = 'tune_labz-lxewc';
    this.getUploadParams = this.getUploadParams.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  getUploadParams({ meta }) {
    this.client = Stitch.initializeAppClient(this.appId);
    this.aws = this.client.getServiceClient(AwsServiceClient.factory, 'AWS')
    const bucket = 'tunechains';
    const url = `http://${bucket}.s3.amazonaws.com/${encodeURIComponent(meta.name)}`
    return ({ url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}`}})
  }

  async handleClick() {
    this.client = Stitch.initializeAppClient(this.appId);
    this.aws = this.client.getServiceClient(AwsServiceClient.factory, 'AWS')
    return new Promise((resolve, reject) => {
      if (this.src.type.match(/audio.*/) ||
        this.src.type.match(/video\/ogg/)) {
        const fr = new FileReader();

        fr.readAsArrayBuffer(this.src);

        fr.addEventListener('progress', (e) => {
          super.fileProgress(e);
        });

        fr.addEventListener('load', (e) => {
          const decoderPromise = super.fileLoad(e);

          decoderPromise.then((audioBuffer) => {
            const key = `${this.client.auth.user.id}-${fr.name}`
            const args = {
              ACL: 'public-read',
              Bucket: 'tunechains',
              ContentType: "audio/mpeg",
              Key: key,
              Body: audioBuffer
            }

            const request = new AwsRequest.Builder()
              .withService('s3')
              .withAction('PutObject')
              .withRegion('us-east-1')
              .withArgs(args)
              .build()

            let result = this.aws.execute(request)

            resolve(result);
          });
        });

        fr.addEventListener('error', (err) => {
          reject(err);
        })
          .then(result => {
            const tracks = this.mongodb.db('data').collection('picstream')
            return tracks.insertOne({
              owner_id: this.client.auth.user.id,
              tracks,
              file: {
                name: fr.name,
                type: fr.type
              },
              ETag: result.ETag,
              ts: new Date()
            })
          })
          .then(result => {
            this.getEntries()
          })
      } else {
        reject(Error(`Unsupported file type ${this.src.type}`));
      }
    });
  }
  

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }


  render() {

    return (
      <Dropzone
        getUploadParams={this.getUploadParams}
        onChangeStatus={this.handleChangeStatus}
        onSubmit={this.handleSubmit}
        PreviewComponent={this.CustomPreview}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        accept="audio/*"
        inputLabel="Upload"
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 },
        }}
      />
    )
  }
}

export default Upload;