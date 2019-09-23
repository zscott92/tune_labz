
const API = require("../utils/API");
const {Vizualizer} = require("../TrackVisualizer/visualizer");
const songs = require("../../../../models");


class SongTree extends Component {
    render() {
        return (
            <div className="List">
                <div className="List-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h2>Song Dependencies</h2>
                </div>
                <Tree nodes={data} />
            </div>
        );
    }
}

export default SongTree;