import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    image: "",
    name: "",
    tagline: "",
    dateJoined: "",
    songs: []
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ songs: res.data, name: "", tagline: "", summary: "", dateJoined: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    <Container fluid>
      <img>{image}</img>
      <ul>
        <li>{name}</li>
        <li>{tagline}</li>
        <li>{summary}</li>
      </ul>
      <li>{songs}</li>
    </Container>
  }
}