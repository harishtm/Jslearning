/* A Higher-order function is a function that can take another function as an argument,
   or that returns a function as a result. */

import React, { Component } from 'react';

// Higher Order Component (HOC) is wrapping around "normal" component and provide additional data input.
// It is actually a function that takes one component and returns another component that wraps the original one.

var newData = {
    data: 'Data from Higher Order Component ....',
}

var MyHOC = ComposedComponent => class extends Component {

    // For example, if you were building a news app that fetches data on the current news and
    // displays it to the user and you may want this data to be updated every hour without
    // the user having to refresh the page.

    // componentDidMount v/s componentWillMount

    componentDidMount() {
        this.setState({
            data: newData.data
        });
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state}/>
    }
}

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default MyHOC(MyComponent);