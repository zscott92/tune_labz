import React, { Component } from 'react';
// import Dropzone from '../Dropzone/Dropzone';
import Progress from '../Progress/Progress';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';

require("dotenv").config();

class Upload extends Component {
  getUploadParams = ({ meta }) => {
    const url = '/tracks'
    return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
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