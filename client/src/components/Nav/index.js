import React, {Component} from "react";

export default class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }


  render() {
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


