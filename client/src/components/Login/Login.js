import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from './OAuth'
import { API_URL } from './config'
import './App.css'
const socket = io(API_URL)
const providers = ['twitter', 'google', 'facebook', 'github']

export default class Login extends Component {
  
    state = {
      user: {},
      disabled: ''
    }
  
    componentDidMount() {
      const { socket, provider } = this.props
  
      socket.on(provider, user => {  
        this.popup.close()
        this.setState({user})
      })
    }
  
    // custom methods to follow
    // render method to follow
  }

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'container'}>
          {providers.map(provider => 
            <OAuth 
              provider={provider}
              key={provider}
              socket={socket}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Login;
