import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Wrapper>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Wrapper>
            </div>
        </Router>
    );
}
    
export default App;