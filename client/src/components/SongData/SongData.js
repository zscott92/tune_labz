import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import 'bootstrap/dist/css/bootstrap.min.css';


class SongData extends Component {
    constructor(props) {
    super(props);
    // Don't call this.setState() here!
    // this.state = {}
  }

    componentDidUpdate() {
        console.log('props', this.props.song);
    }

    handleSongRemix = () => {
        console.log("remix");
    };

    handleSongAdd = () => {
        console.log("add to lib")
    };

    downloadSong = () => {
        console.log("download")
    };

    creatorLink = () => {
        console.log("creator link")
    };

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
                        {/* <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Copy to m</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="danger">Danger</Button> */}
                        <Button variant="info"
                            onClick={this.handleSongAdd}>Add to my Library</Button>
                        <Button variant="dark"
                            onClick={this.downloadSong}
                        >Download</Button>
                        <Button variant="link"
                            onClick={this.creatorLink}
                        >Creator Home</Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}
export default SongData;