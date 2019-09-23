import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
    return (
        <Router>
            <div>
                <Login />
                <Switch>
                    <Route />
                    {/* <Login /> */}
                    {/* <Profile /> */}
                    <Community />
                    {/* <AudioEditor /> */}
                    <Route />
                </Switch>
            </div>
        </Router>
    );
}

export default App;