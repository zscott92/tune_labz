import React, {Component} from "react";

  

class GitHubLogin extends Component {
  state = {
    token: null
  };
  
    render() {
      return(
      <a
      href={"/home"}
    >
      Login
    </a>
      )
  }
}
  
  export default GitHubLogin;