import React, { Component } from "react";
import config from '../config.json';
import GoogleLogin from '../components/GoogleLogin/GoogleLogin'
import GithubLogin from '../components/GithubLogin/GithubLogin'
import FacebookLogin from '../components/FacebookLogin/FacebookLogin'
// import { storage } from "googleapis/build/src/apis/storage";

class Login extends Component {


    render() {


        return (
            <div className="container">

                <div className="jumbotron text-center">
                    <h1 className="display-4">Tune Chainz</h1>
                    <p className="lead">Our application allows users to share and collaborate music projects,
                    edit them on  their local computer, and upload the remixed file back to the project file.</p>
                    <div>
                <GoogleLogin />
                <GithubLogin />
                <FacebookLogin />
                <div>
                    {}
                </div>
                <div>
                    <button onClick={this.logout} className="button">
                        Log out
                    </button>
                </div>
            </div>

                </div>
            </div>
        );
    }
}




export default Login;

