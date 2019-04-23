import React, { Component } from 'react';
import { link } from 'fs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {
    render () {
        return(
            <div>
                <h4>Home</h4>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h4>About</h4>
            </div>
        )
    }
}


class ContactUs extends Component{
    render() {
        return(
            <div>
                <h4>Contact Us</h4>
            </div>
        )
    }
}


class AppRoute extends Component{
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                            <li>
                                <Link to="/contact-us/">ContactUs</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about/" exact component={About}/>
                    <Route path="/contact-us/" exact component={ContactUs}/>
                </div>
            </Router>
        )
    }
}
export default AppRoute;