import React, { Component } from 'react';

class SimpleApp extends Component{
    render () {
        return (
            <div>
                <Greeting/>
            </div>
        )
    }
}

class Greeting extends Component {
    render () {
        const greeting = "Welcome to React"
        return (
            <h4>{ greeting }</h4>
        )
    }
}
    
export default SimpleApp;
