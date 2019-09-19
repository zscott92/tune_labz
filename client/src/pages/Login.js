import React from "react";

function Login (){
return (
    <div>
        <h1>Tune Chain</h1>
        <form>
            Username:<br/>
            <input type="text" name="username"/><br/>
            Password:<br/>
            <input type="password" name="password"/>
        </form>
    </div>
)
}

export default Login