import React, {Component} from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
    return (
        <Router>
            <div>
                <Nav />
                <br/>
                <Wrapper>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
    }
}
    
export default App;