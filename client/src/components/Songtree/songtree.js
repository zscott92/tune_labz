
const API = require("../utils/API");
const { Vizualizer } = require("../TrackVisualizer/visualizer");
const songs = require("../../../../models");
import TreeMenu from 'react-simple-tree-menu'


class SongTree extends Component {
    render() {
        return (
            // Use the default minimal UI
            <TreeMenu data={treeData} />

            // Use any third-party UI framework
            <TreeViewMenu
                data={treeData}
                onClickItem={({ key, label, ...props }) => {
                    this.navigate(props.url); // user defined prop
                }}
                debounceTime={125}>
                {({ search, items }) => (
                    <>
                        <Input onChange={e => search(e.target.value)} placeholder="Type and search" />
                        <ListGroup>
                            {items.map(props => (
                                // You might need to wrap the third-party component to consume the props
                                // check the story as an example
                                // https://github.com/iannbing/react-simple-tree-menu/blob/master/stories/index.stories.js
                                <ListItem {...props} />
                            ))}
                        </ListGroup>
                    </>
                )}
            </TreeViewMenu>

        );
    }
}

export default SongTree;