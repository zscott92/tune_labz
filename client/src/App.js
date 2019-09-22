import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Search from "./pages/Search";
// import Splash from "./pages/Splash";
// import Nav from "./components/Nav";
import Community from "./pages/Community";
import AudioEditor from ".pages/AudioEditor"

function App() {
    return (
        <Router>
            <div>
                {/* <Nav /> */}
                {/* <Switch> */}
                    <Route />
                    {/* <Login /> */}
                    {/* <Profile /> */}
                    <Community />
                    <AudioEditor />
                    <Route />
                {/* </Switch> */}
            </div>
        </Router>
    );
}

export default App;