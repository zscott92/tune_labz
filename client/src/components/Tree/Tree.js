
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
import songData from "./songData.json";
import React, { Component } from "react";

import "react-simple-tree-menu/dist/main.css";

class Tree extends Component {
  state = {}

  handleSongClick = (e, data) => {
    console.log("click" + data);
  }
  render() {
    return (
      <div className="App">


        <TreeMenu data={songData}>
          {({ items }) => (
            <ul style={{ listStyleType: "none" }}>
              {items.map(props => {
                console.log(props);
                return (
                  <ItemComponent
                    {...props}
                    label={`${props.song_name} - ${props.song_desc}
                  [${props.song_genre}]
                  `}
                  />
                );
              })}
            </ul>
          )}
        </TreeMenu>
      </div>
    );
  }
}

export default Tree;    
