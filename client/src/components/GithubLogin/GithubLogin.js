import React, {Component} from "react";

<<<<<<< HEAD
export default function GitHub() {
    const onSuccess = response => console.log(response);
  const onFailure = response => console.error(response);
   
    return (
    <GitHubLogin clientId="ac56fad434a3a3c1561e"
      onSuccess={onSuccess}
      onFailure={onFailure}/>
    )
  }
=======
  

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
>>>>>>> ff032e180d319352dd7abab8c7fa67aca64ec636
