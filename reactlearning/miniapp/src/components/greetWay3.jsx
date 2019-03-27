import React, { Component } from 'react';

class GreetWay3 extends Component {
    render () {
        const msg = "Welcome to React way3";
        return (
            <Greeting message={msg}></Greeting>
        )
    }
}

class Greeting extends Component {
    render () {
        return (
            <h4> {this.props.message } </h4>
        )
    }
}

export default GreetWay3;