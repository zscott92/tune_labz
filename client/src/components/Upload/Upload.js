import React, { Component } from 'react';
// import Dropzone from '../Dropzone/Dropzone';
import Progress from '../Progress/Progress';
import './Upload.css';
import Sound from 'react-sound';
import Dropzone from 'react-dropzone-uploader';
require("dotenv").config();

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    // this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
            </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
            </button>
      );
    }
  }


  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    // console.log("Uploading tracks to CosmosDB");
    // let apiUrl = '/tracks';
    // let uri = file[0];
    // console.log(uri)
    // let uriParts = uri.split('.');
    // console.log(uriParts)
    // let fileType = uriParts[uriParts.length - 1];

    // let formData = new FormData();
    // formData.append('file', {
    //   uri: uri,
    //   track: `recording.${fileType}`,
    //   type: `audio/x-${fileType}`,
    // });

    // let options = {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   },
    // };

    // console.log("Posting " + uri + " to " + apiUrl);
    // return fetch(apiUrl, options);
  }

  Preview = ({ meta }) => {
    const { name, percent, status } = meta
    return (
      <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
        {name}, {Math.round(percent)}%, {status}
      </span>
    )
  }

  getUploadParams = ({ meta }) => {
    const url = '/tracks'
    return {url, meta: { fileUrl: `${encodeURIComponent(meta.name)}`}}
  }

  handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      alert(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      alert(`${meta.name}, upload failed...`)
    }
  }

    async sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      console.log(this.getUploadParams)
      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });
      const path = 'file://' + this.getUploadParams + 'test.aac'
      console.log(path)
      const formData = new FormData();
      console.log(file);
      formData.append('file', {
        uri: path,
        name: 'test.aac',
        type: 'audio/aac',
      })
      try {
        const res = fetch('/tracks', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        })
        const json = res.json()
      } catch (err) {
        alert(err)
      }
       // req.open("POST", "/tracks");
      // req.send(formData);
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="Content">
          <div>
            {/* <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            /> */}
            <Dropzone
      getUploadParams={this.getUploadParams}// specify upload params and url for your files
      onChangeStatus={this.handleChangeStatus}
      maxFiles={1}
        multiple={false}
        canCancel={false}
        PreviewComponent={this.Preview}
      accept="audio/*"
    />
          </div>
          <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                  ref = {file.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">
          {this.renderActions()}
        </div>
      </div>
    );
  }
}
export default Upload;