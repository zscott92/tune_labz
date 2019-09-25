import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "../src/components/DomComponents/Nav";
import Wrapper from "../src/components/DomComponents/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Wrapper>
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;