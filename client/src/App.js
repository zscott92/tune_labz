import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
// import Dashboard from "./pages/Dashboard";
import Nav from "../src/components/DomComponents/Nav";
import Wrapper from "../src/components/DomComponents/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Wrapper>
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;