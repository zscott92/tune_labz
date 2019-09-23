import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
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
