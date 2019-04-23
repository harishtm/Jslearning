import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <h4>Welcome to Home page</h4>
            </div>
        )
    }
}


class About extends Component {
    render() {
        return(
            <div>
                <h4>About</h4>
            </div>
        )
    }
}

const Topic = ({match}) =>
{
    return(
        <div>
            <h4>Requested Params: { match.params.id }</h4>
        </div>
    )
}


const Topics = ({match}) => (
    <Router>
        <div>
            <h3>
                Topics
            </h3>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-vs-state`}>Props vs State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={`${match.path}/:id`}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    </Router>
)


class Header extends Component{
    render() {
        return (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/topics'>Topics</Link>
                </li>
            </ul>
        )
    }
}

class NestedRoute extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }
}

export default NestedRoute;