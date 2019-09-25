import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Wrapper>
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;