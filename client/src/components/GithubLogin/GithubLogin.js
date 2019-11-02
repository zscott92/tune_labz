import React, {Component} from "react";
import GitHubLogin from 'github-login'

export default function GitHub() {
    const onSuccess = response => console.log(response);
  const onFailure = response => console.error(response);
   
    return (
    <GitHubLogin clientId="ac56fad434a3a3c1561e"
      onSuccess={onSuccess}
      onFailure={onFailure}/>
    )
  }
