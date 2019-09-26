import {onChange}from '../FileUploads/upload';
const { Component } = require("react");
const ReactHowler = require('react-howler');
import {onClickHandler } from '../SongData';
class PlayMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedValue: FileSelected,
    };
  }

    getDuration() {
      this.player.duration()
    }
    getSeek() {
      this.player.seek()
    }
                 
    render() {
      return (
        <div>
        <ReactHowler
          src={onClickHandler}
          onChange={onClickHandler}
          playing={true}
            ref={(ref) => (this.player = ref)}
            />
            </div>

      );
    }
  }


export default PlayMusic;