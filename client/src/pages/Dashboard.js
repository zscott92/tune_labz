import React from "react";
import Tree from "../components/Tree/Tree";
import SongData from "../components/SongData/SongData";

function Dashboard() {

  return (

    <div>
      <div className="Dashboard text-center">
        <div className="row">
          <div className="col-4 sidebar">
            <Tree />
          </div>
          <div className="col-8 songdata">
            <SongData />
          </div>
        </div>
      </div>
    </div>

  )

  //When calling tree , associate with a specific user id! FOR USER SPECIFIC SONGS!!!!!!

}

export default Dashboard;
