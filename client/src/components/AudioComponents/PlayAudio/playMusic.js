import {onChange}from '../FileUploads/upload';
const { Component } = require("react");
const ReactHowler = require('react-howler');
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
          render () {
            return(
              <ReactHowler
                src= {[onChange]}
                playing={true}
                ref={(ref) => (this.player = ref)}
              />
            );
          }
        }

export default PlayMusic;