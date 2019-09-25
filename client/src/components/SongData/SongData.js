import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid"
import React from 'react';
import Wrapper from '../Wrapper';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
                
  handleChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
  }
  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
  }

  render() {
    return (
      <Wrapper>
        <label>
          Upload Audio File
          <input type="file" name="file" onChange={this.handleChange} />
          <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
        </label>
        <input type="submit" value="Submit" />
        </Wrapper>
        );
  }
}
export default Upload;

class SongData extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
  }
   onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
  }
    componentDidUpdate() {
        console.log('props', this.props.song);
    }

    handleSongRemix = () => {
        console.log("remix", this.props.song.song_id);
    };

    //remix
    handleSongAdd = () => {
        console.log("add to lib: ", this.props.song)
        API.saveSong(this.props.song)
    };

    downloadSong = () => {
        console.log("download", this.props.song.song_id)
    };

    creatorLink = () => {
        console.log("creator link")
    };

    handleUpload = () => {
        console.log("upload file")
    }

    render() {
        return (
            <div>
                <div className="songinformation">
                    <h1>{this.props.song.song_name}</h1>
                    <h2>Original Artist: {this.props.song.song_creator}</h2>
                    <h2>{this.props.song.song_desc}</h2>
                    <img src={this.props.song.song_pic_url} alt="missing img"></img>
                </div>
                <div className="button-toolbar">
                    <ButtonToolbar>
                        <Button variant="primary"
                            onClick={this.handleSongRemix}
                        >Create Remix</Button>
                        <input type="file" name="file" onChange={this.handleChange} 
                        <label>
                                Upload Audio File
                            <Button variant="success"  onClick={this.onClickHandler}>Upload</button>
                        </label>
                        {/* <Button variant="secondary">Secondary</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="danger">Danger</Button> */}
                        <Button variant="info"
                            onClick={this.handleSongAdd}
                        >
                            Add to my Library</Button>
                        <Button variant="dark"
                            onClick={this.downloadSong}
                        >
                            Download</Button>
                            <Button variant="link"
                                onClick={this.creatorLink}
                            >
                                Creator Home</Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}