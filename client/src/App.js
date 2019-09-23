import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Switch } from "react-router-dom";

// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Search from "./pages/Search";
// import Splash from "./pages/Splash";
import Nav from "./components/Nav/index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

// import Community from "./pages/Community";
// import AudioEditor from ".pages/AudioEditor"

function App() {
    return (
        <Router>
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
        </Router>
        <div>
            <Nav />
            <Wrapper>
                <Route exact path="/" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} />
            </Wrapper>
        </div>
    );
}

export default App;