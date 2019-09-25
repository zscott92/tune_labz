import React from "react";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
import songData from "./songData.json";

import "react-simple-tree-menu/dist/main.css";

function Tree() {
  return (
    <div className="App">

      
      <TreeMenu data={songData}>
        {({ items }) => (
          <ul>
            {items.map(props => {
              console.log(props);
              return (
                <ItemComponent
                  {...props}
                  label= {`${props.song_name}
                  description= ${props.song_desc}
                  image= ${props.song_pic_url}
                  nodes= ${props.nodes}`}
                />
              );
            })}
          </ul>
        )}
      </TreeMenu>
    </div>
  );
}

export default Tree;    
