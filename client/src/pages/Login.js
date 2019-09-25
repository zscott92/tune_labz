import React from "react";



function Login() {
    return (
<<<<<<< HEAD
            <div class="container">
                <br />
                <div class="jumbotron text-center">
                    <h1 class="display-4">Tune Chainz</h1>
                    <p class="lead">Our application allows user to share and collaborate music projects,
                    edit them on  their local computer, upload the remixed file back to the project file.</p>
=======
            <div className="container">
                <br />
                <div className="jumbotron text-center">
                    <h1 className="display-4">Tune Chainz</h1>
                    <p className="lead">Our application allows users to share and collaborate music projects,
                    edit them on  their local computer, and upload the remixed file back to the project file.</p>
>>>>>>> 14de227b8b27c997b6719e506f0ce1ac2b1ef41f

                    <br/>
                    <form>
                        Username:<br />
<<<<<<< HEAD
                        <input type="text" name="username" /><br />
                        Password:<br />
                        <input type="password" name="password" />
=======
                        <input type="text" autoComplete="username"/><br />
                        Password:<br />
                        <input type="password" autoComplete="current-password"/>
>>>>>>> 14de227b8b27c997b6719e506f0ce1ac2b1ef41f
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

