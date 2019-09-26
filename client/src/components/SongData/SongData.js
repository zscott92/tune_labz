import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid"
import Wrapper from '../Wrapper';
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
 let allValues = data.values()
    let extractURL = allValues[0]
    let domain = extractURL.substring(extractURL - 3);

   onClickHandler = () => {
    event.preventDefault();
    const data = new FormData(event.target)
    data.append('file', this.state.selectedFile, this.state.description);
    axios.post(endpoint, data, {
       onUploadProgress: ProgressEvent => {
         this.setState({
           loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
       }).then(() => {
           this.props.history.push("/");
       })
       .catch errior => {
           alert(Well this is embarassing...file was unable to upload successfully);
       }
   },
    })
 }

    handleSongRemix = () => {
        console.log("remix", this.props.song.song_id);
    };


    downloadSong = () => {
        console.log("download", this.props.song.song_id)
    };


    render() {
        return (
            <div>
                class MyComponent extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      playing: false,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  render() {
    return (
      <div> 
                <div className="songinformation">
                <div className="button-toolbar">
                    <ButtonToolbar>
                        <Button variant="primary"
                            onClick={this.handleSongRemix}
                        >Create Remix</Button>
                        <input type="file" hidden name="file" onChange={this.onChangeHandler} id="contained-button-file"/>
                        <label htmlFor="contained-button-file">
                        <button type="button" Button variant="dark" class="btn btn-success btn-block" id="contained-button-file" onClick={this.onClickHandler}>Upload</button>
                        </label>
                        <input type="submit" value="Submit" />
                        <div class="form-group">
                        <ReactHowler
                            src= {[file]}
                            playing={false}
                            ref={(ref) => (this.player = ref)}
                             preload = true
                            html5 = true
                            onLoad
                             />
                            <Wavesurfer
                             audioFile={[file]}
                            pos={this.state.pos}
                            onPosChange={this.handlePosChange}
                            playing={this.state.playing}
                            />
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