import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
            <div>
                <Nav/>
                <Switch>
                    <Route>
                    <Dashboard />
                    </Route>
                </Switch>
            </div>
    );
}

export default App;