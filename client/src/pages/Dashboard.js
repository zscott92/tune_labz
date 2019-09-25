import React, { Component } from "react";

//Grid and List html components not yet used====================================================
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import Jumbotron from "../components/Jumbotron";
//==============================================================================================

import API from "../utils/API";

import Tree from "../components/Tree";
import SongData from "../components/SongData";
// import TrackVisualizer from "../components/TrackVisualizer";

class Dashboard extends Component {

  state = {
    songs
  };

  componentDidMount() {
    this.loadSongs();
  }


  //need to pass id from page load after user logs in.
  loadSongs = id => {
    API.getUserSongs(id)
      .then(res =>
        this.setState({ songs: res.data, song_name: "", song_owner: "", song_desc: "", song_pic_url: "", song_genres: "" }))
      .catch(err => console.log(err));
  };



  // OnLoadFunctions - commented out for now until tree set up for usability===========================================================================
 
  // loadChildrenSongs = () => {
  //   API.getSongChildren(song_id)
  //     .then(res =>
  //       this.setState({})) 
  //     .catch(err => console.log(err));
  // },
  //=================================================================================================================================
  <div>
    <Dashboard>
      <div className="sidebar">
        <p>Dashboard Content</p>
        <Tree />
      </div>
      <div className="song data">
        <SongData />
      </div>
    </Dashboard>
  </div >

)
    // return (
    //   <Container fluid>
    //     <Row>
    //       <Col size="md-6">
    //         <Jumbotron>
    //           <h1>User Song List</h1>
    //         </Jumbotron>
    //         {this.state.songs.length ? (
    //           <List>
    //             {this.state.songs.map(song => (
    //               <ListItem key={song._id}>
    //                 {/* <Link to={"/songs/" + song._id}>
    //                   <strong>
    //                     {song.song_name} by {song.song_desc}
    //                   </strong>
    //                   <div>
    //                     {song.song_visualization}
    //                   </div>
    //                 </Link> */}
    //               </ListItem>
    //             ))}
    //           </List>
    //         ) : (
    //             <h3>No Songs Available</h3>
    //           )}
    //       </Col>
    //     </Row>
    //   </Container>
    // );
  }

export default Dashboard;
