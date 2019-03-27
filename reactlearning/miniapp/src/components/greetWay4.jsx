import React, { Component } from 'react';
import GreetWay2 from './greetWay2';


class GreetWay4 extends Component {
    render () {
        return (
            <Greeter message="Welcome to react way4"></Greeter>
        )
    }
}

const Greeter = (props) => <h4>{ props.message }</h4>;

export default GreetWay4;