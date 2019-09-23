import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

import { Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Splash from "./pages/Splash";
import Nav from "./components/Nav/index";
// import Community from "./pages/Community";
// import AudioEditor from ".pages/AudioEditor"

function App() {
    return (
            <div>
                <Nav />
                <Switch>
                    <Route />
                    {/* <Login /> */}
                    {/* <Profile /> */}
                    {/* <Community /> */}
                    {/* <AudioEditor /> */}
                    <Route />
                </Switch>
            </div>
    );
}

export default App;