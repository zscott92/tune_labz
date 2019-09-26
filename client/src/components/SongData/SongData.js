import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid"
import Wrapper from '../Wrapper';
import Wave from '../WAV/mp3-to-WAV';
const {Progress} = require('reactstrap');
const axios = require( 'axios');

class SongData extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
  }

 maxSelectFile=(event)=>{
       if (this.state.selectedFile > 1) { 
          const msg = 'Only 1 images can be uploaded at a time'
          event.target.value = null 
          console.log(msg)
         return false;
     }
   return true;
}


   onClickHandler = () => {
    const data = new FormData()
    const mp3 = 'mp3';
    const wav = 'wav';
    let allValues = data.values()
    let extractURL = allValues[0]
    let domain = extractURL.substring(extractURL - 3);
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:8000/upload", data, {
       onUploadProgress: ProgressEvent => {
         this.setState({
           loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
       })
   },
})
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
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                        <label htmlFor="contained-button-file">
                        <button type="button" Button variant="dark" class="btn btn-success btn-block" id="contained-button-file" onClick={this.onClickHandler}>Upload</button>
                        </label>
                        <input type="submit" value="Submit" />
                        <div class="form-group">
                            <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
                            </div>
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
export default SongData;