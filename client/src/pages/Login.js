import React from "react";
import API from "../utils/API";


function Login() {
    return (
            <div class="container">
                <br />
                <div class="jumbotron text-center">
                    <h1 class="display-4">Tune Chainz</h1>
                    <p class="lead">Our application allows user to share and collaborate music projects,
                    edit them on  their local computer, upload the remixed file back to the project file.</p>
                    <br/>
                    <form>
                        Username:<br />
                        <input type="text" name="username" /><br />
                        Password:<br />
                        <input type="password" name="password" />
                        <br/>
                        <br/>
                        <button>Sign Up</button><br/>
                        <button>Log In</button><br/>
                    <button>Sign In With Google</button>
                    <div class="sampleDiv"><label for="file">Upload Sample +</label><input type="file" id="file" name="file" ></input></div>
                    </form>
                </div>
            </div>
    )
}

export default Login; 

