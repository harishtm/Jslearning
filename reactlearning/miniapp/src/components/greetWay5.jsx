import React, { Component } from 'react';

class GreetWay5 extends Component{
    render () {
        return (
            <div>
                <Greeter params={{ text: "Welcome to React way5"}}></Greeter>
            </div>
        )
    }
}


// NOTE: argumnet has to passed with {} flower braces to evaluate
const Greeter = ({params}) => <h4>{params.text}</h4>; 


export default GreetWay5;