import React, { Component } from "react";

function Home() {
    return (
        <div>
            <div class="container">
                <br />
                <div class="jumbotron text-center">
                    <h1 class="display-4">Tune Chainz</h1>
                    <p class="lead">Our application allows user to share and collaborate music projects,
                    edit them on  their local computer, upload the remixed file back to the project file</p>

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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home; 