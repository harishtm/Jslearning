import React, { Component } from 'react';

class GreeterWay1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
        };
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow}));
    }

    render () {
        const msg = "React with prop and state"

        return (
            <div>
                <Greeting message={msg} isShow={ this.state.isShow }></Greeting>
            </div>
        )
    }
}


const Greeting = ({message, isShow}) => isShow ? <h4>{message}</h4> : "No message to display";

export default GreeterWay1;