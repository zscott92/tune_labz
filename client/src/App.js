import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
// import Dashboard from "./pages/Dashboard";
import Nav from "../src/components/DomComponents/Nav";
import Wrapper from "../src/components/DomComponents/Wrapper";

// import Community from "./pages/Community";
// import AudioEditor from ".pages/AudioEditor"

function App() {
    return (
        <div>
            <Nav />
            <Router>
            <Wrapper>
                <Route exact path="/" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} />
                </Wrapper>
                </Router>
        </div>
    );
}

export default App;