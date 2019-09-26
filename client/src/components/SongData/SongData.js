import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid"
import Wrapper from '../Wrapper';
const {Progress} = require('reactstrap');
const axios = require('axios');
const Howler = require('react-howler');

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
            file: event.target.files[0],
            isLoading: false,
        })
    }
    toggleHowler(props) {
        (props.playing) ? this.play() : this.pause()
        this.mute(props.mute)
        this.loop(props.loop)
        if (props.mute !== this.props.mute) {
            this.mute(props.mute)
        }

        if (props.volume !== this.props.volume) {
            this.volume(props.volume)
        }

    
    
    // handleTogglePlay() {
    //     this.setState({
    //         playing: !this.state.playing
    //     });
    // }


    handleSongRemix = () => {
        console.log("remix", this.props.song.song_id);
    };
    handleselectedFile = event => {
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
    }
    handleUpload = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios
          .post("/api/upload", data, {
            onUploadProgress: ProgressEvent => {
              this.setState({
                loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
              })
            },
          })
          .then(res => {
            console.log(res.statusText)
          })  
        console.log("download", this.props.song.song_id)
    };
    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
    }
    
    // getDuration() {
    //     this.player.duration()
    // }
    // getSeek() {
    //     this.player.seek()
    // }
    maxSelectFile = (event) => {
        if (this.state.selectedFile > 1) {
            const msg = 'Only 1 images can be uploaded at a time'
            event.target.value = null
            console.log(msg)
            return false;
        }
        return true;
    }
    }

    render() {
        return (
            <div className="songinformation">
                <div className="button-toolbar">
                    <ButtonToolbar>
                        <Button variant="primary"
                            onClick={this.handleSongRemix}
                        >Create Remix</Button>
                        <div className="App">
                            <form>
        <input id="file_input_file" type="file" onChange={(e) => this._handleFileChange(e)} ref={ref=> this.fileInput = ref} />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded,2) } %</div>
            </form>
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
        )
    }
}
export default SongData;


    