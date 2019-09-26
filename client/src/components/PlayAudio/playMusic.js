import {onChange}from '../FileUploads/upload';
const { Component } = require("react");
const ReactHowler = require('react-howler');
const { File } = require('../SongData');
class PlayMusic extends Component {
        getDuration() {
            this.player.duration()
          }
          getSeek() {
            this.player.seek()
          }
                 
          render () {
            return(
              <ReactHowler
                src= {[File]}
                playing={true}
                ref={(ref) => (this.player = ref)}
              />
            );
          }
        }

export default PlayMusic;