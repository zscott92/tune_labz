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

  handleSubmit(files, allFiles) {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
    this.setState({ file: undefined })
    this.getUploadParams = this.getUploadParams.bind(this);
  }

    getUploadParams = async ({meta}, e) =>  {
      this.setState({ file: e.target.files[0] });
      file.src = URL.createObjectURL({'file': this.state});
      const url = file.src;
      const uri = { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` }}
        const fila = (({ name }) => ({ name }))(meta);
        console.log(fila)
        var values = Object.keys(fila).map(function (key) { return file[key]; });
        console.log(values)
        var cleanFile = values[0];
        let fi = JSON.stringify(cleanFile);
        console.log(fi);
        let trimmedFile = fi.substr(fi.slice(".",-1));
        let trim = trimmedFile.replace(/['"]+/g, '')
        console.log(trim)
        uri.arrayBuffer().then(buf => {
          const file = new File([buf], trim, { type: 'image/aac' })
          this.setState({ file })
         })
        const formData = new FormData()
        formData.append('file', {
          uri: uri,
          name: `file://${trim}/test.aac`,
          type: 'audio/aac',
        })
        console.log(formData)
        let stream = this.uploadReadableStream('file', formData)
        console.log(stream)
        return stream;
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
        PreviewComponent={this.CustomPreview}
        maxFiles={1}
        accept="audio/*"
        inputLabel="Upload"
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 },
        }}
        s3={
          this.s3
        }
      />
    )
  }
}

export default Upload;