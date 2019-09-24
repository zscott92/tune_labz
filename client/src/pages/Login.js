import React from "react";


function Login() {
    return (
            <div className="container">
                <br />
                <div className="jumbotron text-center">
                    <h1 className="display-4">Tune Chainz</h1>
                    <p className="lead">Our application allows users to share and collaborate music projects,
                    edit them on  their local computer, and upload the remixed file back to the project file.</p>

                    <br/>
                    <form>
                        Username:<br />
                        <input type="text" autoComplete="username"/><br />
                        Password:<br />
                        <input type="password" autoComplete="current-password"/>
                        <br/>
                        <br/>
                        <button>Sign Up</button><br/>
                        <button>Log In</button><br/>
                    <button>Sign In With Google</button>
                    </form>
                </div>
            </div>
    )
}

export default Login; 

