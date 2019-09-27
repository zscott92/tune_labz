import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';
// import { storage } from "googleapis/build/src/apis/storage";

class Login extends Component {

    state = { isAuthenticated: false, user: null, token: '' }

    componentDidMount = () => {
        let accessToken = localStorage.getItem('token')
        console.log(accessToken);
        const tokenBlob = new Blob([JSON.stringify({ access_token: accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('/auth/google', options).then(r => {
           
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({ isAuthenticated: true, user, token });
                                        // key value pair
                    localStorage.setItem('token', token);
                }
            });
        })

    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };
    
    onFailure = (error) => {
        console.log(error);
    };

    googleResponse = (response) => {
        // console.log("test", response)
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });

        localStorage.setItem('token', response.accessToken);
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    console.log(token);
                    this.setState({ isAuthenticated: true, user, token });
                                        
                    
                    
                }
            });
        })
    };


    render() {
        let content = !!this.state.isAuthenticated ?

            // <div className="container">

            //     <div className="jumbotron text-center">
            //         <h1 className="display-4">Tune Chainz</h1>
            //         <p className="lead">Our application allows users to share and collaborate music projects,
            //         edit them on  their local computer, and upload the remixed file back to the project file.</p>


            //         <br/>
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>

                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            );

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}




export default Login;

