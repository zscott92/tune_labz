
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";

import React, { Component } from "react";

import "react-simple-tree-menu/dist/main.css";

class Tree extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {}
  }


  handleSongClick = (e, data) => {
    console.log("click" + data);

  }
  render() {
    return (
      <div className="App">


        <TreeMenu data={this.props.data} onClickItem={(song) => this.props.onClick(song)}>
          {({ items }) => (
            <ul style={{ listStyleType: "none" }}>
              {items.map(props => {
                // console.log(props);
                return (
                  <div key={props.song_id}>
                  <ItemComponent
                    
                    {...props}
                    label={`${props.song_name} - ${props.song_desc}
                  [${props.song_genre}]
                  `}
                  />
                  <button onClick={this.props.onClick} />
                  </div>
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
