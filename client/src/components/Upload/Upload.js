import React, { Component } from 'react';
// import Dropzone from '../Dropzone/Dropzone';
import Progress from '../Progress/Progress';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import { Stitch } from 'mongodb-stitch-server-sdk';
import {AwsServiceClient, AwsRequest} from 'mongodb-stitch-browser-services-aws';
import RNFetchBlob from 'react-native-fetch-blob'
import db from '../../../../config/db'
require("dotenv").config()

class Upload extends Component {
  constructor(props) {
    super(props)
    this.appId = props.appId;
  
  }
  
  async getUploadParams ({ meta }) {
    this.client = Stitch.initializeAppClient(this.appId);
    this.aws = this.client.getServiceClient(AwsServiceClient.factory, 'AWS')
    let file = meta;
    const bucket = 'tunechains';
    const url = `http://${bucket}.s3.amazonaws.com/${encodeURIComponent(meta.name)}`
    return ({ url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}`}})
  }

  import Loader from './Loader';

export default class extends Loader {

  load() {
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
            const key = `${this.client.auth.user.id}-${meta.name}`
      const args = {
        ACL: 'public-read',
        Bucket: 'tunechains',
        ContentType: "audio/mpeg",
        Key: key,
        Body: result
      }
 
      const request = new AwsRequest.Builder()
        .withService('s3')
        .withAction('PutObject')
        .withRegion('us-east-1')
        .withArgs(args)
        .build()
 
      let result = this.aws.execute(request)
    
            resolve(audioBuffer);
          });
        });

        fr.addEventListener('error', (err) => {
          reject(err);
        })
        .then(result => {
          const tracks = this.mongodb.db('data').collection('picstream')
          return tracks.insertOne({
            owner_id: this.client.auth.user.id,
            db,
            file: {
              name: meta.name,
              type: meta.type
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
}

  async transferData({meta}) {
    

  

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
        inputLabel= "Upload"
        inputContent="Upload -- click or drag audio file"
        inputContent={(files, extra) => (extra.reject ? 'Audio Files Only' : 'Drag Files')}
        styles={{ dropzone: { minHeight: 200, maxHeight: 250 },
      }}
      />
    )
  }
}

export default Upload;