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
                <button onClick={this.toggleShow} type="button">Toggle Show Way 1</button>
            </div>
        )
    }
}


const Greeting = ({message, isShow}) => isShow ? <h4>{message}</h4> : null;

export default GreeterWay1;