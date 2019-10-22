import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import API from "../../utils/API";
import Upload from '../Upload/Upload'
// import {Col, Container, Row} from "../Grid"

class SongData extends Component {
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
                        {/* <Button variant="success"
                            // onClick={this.handleUpload}
                        > */}
                            <Upload />
                        {/* <Button variant="secondary">Secondary</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="danger">Danger</Button> */}
                        <div className="jumbotron">
                        <div className="col">
                        <Button variant="dark"
                            onClick={this.downloadSong}
                        >Download</Button>
                        <Button variant="warning"
                            onClick={this.creatorLink}
                        >Creator Home</Button>
                        </div>
                        </div>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}
export default SongData;