import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Dashboard extends Component {
  state = {
    song_name: [],
    song_desc: "",
    song_pic_url: "",
    song_genres: [],
    song_visualization: ""
  };

  componentDidMount() {
    this.loadSongs();
  }

  // This loads all of user's songs in library
  loadSongs = () => {
    API.getIUserSongs() //TODO add ID parameter to get user specific songs
      .then(res =>
        this.setState({ songs: res.data, song_name: "", song_pic_url: "", song_genres: "", song_visualization: "" })
      )
      .catch(err => console.log(err));
  };

  //This loads one clicked song in tree to the song data section of dashboard
  getSong = () => {
    API.getSong()
      .then(res =>
        this.setState({ songs: res.data, song_name: "", song_pic_url: "", song_genres: "", song_visualization: "" }))
  }


  //onclick function for [+]  for song children for a clicked on song
  loadChildrenSongs = () => {
    API.getSongChildren(song_id)
      .then(res =>
        this.setState({})) //TODO append children songs to user song objects
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>User Song List</h1>
            </Jumbotron>
            {this.state.songs.length ? (
              <List>
                {this.state.songs.map(song => (
                  <ListItem key={song._id}>
                    {/* <Link to={"/songs/" + song._id}>
                      <strong>
                        {song.song_name} by {song.song_desc}
                      </strong>
                      <div>
                        {song.song_visualization}
                      </div>
                    </Link> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Songs Available</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
