import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Profile extends Component {
    state = {
        name: "",
        tagline: "",
        summary: "",
        genre: []
    };

    componentDidMount() {
        this.loadUser();
    }


  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

}