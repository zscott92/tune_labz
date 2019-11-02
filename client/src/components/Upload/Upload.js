import React, { Component } from 'react';
import axios from 'axios';
import DisplayImage from '../DisplayImage/DisplayImage'
import './Upload.css'

export default class Uploader extends Component {
  state = {
    message:''
  };

  getAudio = e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.setState({ file });
    }
  };

  uploadFile = e => {
    e.preventDefault();
    const { file } = this.state;
    this.setState({message:'Uploading...'})
    const contentType = file.type; // eg. image/jpeg or image/svg+xml

    const generatePutUrl = 'http://localhost:3500/generate-put-url';
    const options = {
      params: {
        Key: file.name,
        ContentType: contentType
      },
      headers: {
        'Content-Type': contentType
      }
    };

    axios.get(generatePutUrl, options).then(res => {
      const {
        data: { putURL }
      } = res;
      axios
        .put(putURL, file, options)
        .then(res => {
          this.setState({message:'Upload Successful'})
          setTimeout(()=>{
            this.setState({message:''});
            document.querySelector('#upload-image').value='';
          }, 2000)
        })
        .catch(err => {
          this.setState({message:'Sorry, something went wrong'})
          console.log('err', err);
        });
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Upload an image to AWS S3 bucket</h1>
        {/* <input
          id='upload-image'
          type='file'
          accept='audio/*'
          onChange={this.getImage}
        /> */}
        {/* <div
        className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      > */}
        <input
          id='upload-image'
          type='file'
          accept='audio/*'
          onChange={this.getAudio}
        />
        {/* <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        /> */}
      {/* </div> */}
        <p>{this.state.message}</p>
        <form onSubmit={this.uploadFile}>
          <button id='file-upload-button'>Upload</button>
        </form>
      </React.Fragment>
    );
  }
}