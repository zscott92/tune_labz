import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Search from "./pages/Search";
// import Splash from "./pages/Splash";
import Nav from "./components/Nav";

function App() {
    return (
            <div>
                <Nav />
            </div>
    );
}

export default App;