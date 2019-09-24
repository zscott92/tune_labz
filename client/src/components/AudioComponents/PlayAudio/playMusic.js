import React, { Component } from "react";
import {handleChange } from "./FileUploads";
const { ReactHowler } = require('react-howler');

class PlayMusic extends Component {
        getDuration() {
            this.player.duration()
          }
          getSeek() {
            this.player.seek()
          }
                 
          setSeek() {
            this.player.seek(0.5)
          }
            render() {
            <ReactHowler
            src= {[handleChange]}
                  playing={true}
          format={'mp3', 'wav'}
          ref={(ref) => (this.player = ref)}
          />
            }
}
export default PlayMusic;