import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);



    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <a href="../login">Sign Up / Login</a>
          <a href="../dashboard">Dashboard</a>
      </nav>
      </div>
    );
  };
}


