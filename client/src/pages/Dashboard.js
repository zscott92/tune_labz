import React, { Component } from "react";
import API from "../utils/API";

class Dashboard extends Component {
    state = {
      song_name: [],
      song_desc: "",
      song_pic_url: "",
      song_genres: []
    };

componentDidMount() {
    this.loadSongs();
  }

  // This function resets the todos displayed with new todos from the database
  loadSongs = () => {
      API.getSongs()
      .then(res => 
        this.setState({ songs: res.data, song_name: "", song_pic_url: "", song_genres: "" })
      )
      .catch(err => console.log(err));
  };
  

  render () {
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
                      <Link to={"/songs/" + song._id}>
                        <strong>
                          {song.song_name} by {song.song_desc}
                        </strong>
                      </Link>
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
  