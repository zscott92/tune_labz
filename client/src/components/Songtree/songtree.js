
const API = require("../utils/API");
const {Vizualizer} = require("../TrackVisualizer/visualizer");
const songs = require("../../../../models");

import React from "react";
import ReactDOM from "react-dom";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
import songData from "./songData.json";

import "./styles.css";
import "../node_modules/react-simple-tree-menu/dist/main.css";

function App() {
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default SongTree;    