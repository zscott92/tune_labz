import React from "react";
import ReactDOM from "react-dom";
import GitHub from 'react-github-login';

function GitHubLogin() {
    const onSuccess = response => console.log(response);
  const onFailure = response => console.error(response);
   
    return (
      <ReactDOM.render>
    <GitHub clientId="Iv1.73b33e9c8985e5de"
      onSuccess={onSuccess}
      onFailure={onFailure}/>
      </ReactDOM.render>
    )
  }
  export default GitHubLogin;