import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import { BrowserRouter as Router, Route,} from "react-router-dom";
>>>>>>> 14de227b8b27c997b6719e506f0ce1ac2b1ef41f
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
    return (
<<<<<<< HEAD
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
=======
        <Router>
            <div>
                <Nav />
                <Wrapper>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Wrapper>
            </div>
        </Router>
>>>>>>> 14de227b8b27c997b6719e506f0ce1ac2b1ef41f
    );
}
    
export default App;