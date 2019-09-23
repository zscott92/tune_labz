import React, { Component } from "react";
import API from "../utils/API";
import Tree from "../components/Tree";

function Dashboard() {

  return (

    <div>
      <Dashboard>
        <div className="sidebar">
          <Tree />
        </div>
        <div className="song data">
          <SongData />
          <TrackVisual />
        </div>
      </Dashboard>
    </div>

  )

}

export default Dashboard;
