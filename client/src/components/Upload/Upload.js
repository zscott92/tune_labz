import React, { Component } from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import AWS from 'aws-sdk';
var s3 = new AWS.S3();

require("dotenv").config()

class Upload extends Component {
  constructor() {
    super()
    this.state = { file: undefined }
    this.getUploadParams = this.getUploadParams.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  getUploadParams = async ({ meta }) => {
      const url = '/upload'
      return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
    }


        uploadReadableStream = async (stream) => {
          const params = {Bucket: 'tunechains', Key: stream, Body: stream.patientfile.path.buffer};
          return s3.upload(params).promise();
        }
        
        upload = async () => {
          const readable = this.getUploadParams();
          console.log(readable)
          const results = await this.uploadReadableStream(readable);
          console.log('upload complete', results);
        }
  

  render() {
    return (
      <Dropzone
        getUploadParams={this.getUploadParams}
        onChangeStatus={this.handleChangeStatus}
        onSubmit={this.handleSubmit}
        accept="audio/*"
        inputContent={(files, extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag Files')}
        canRemove={true}
        styles={{
          dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
          inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
        }}
      />
    )
  }
}

export default Upload;