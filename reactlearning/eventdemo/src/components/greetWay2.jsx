import React, { Component } from 'react';

class GreeterWay2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow}));
    };

    render () {
        const msg = "Welcome to react"
        return (
            <div>
                { this.state.isShow ? <Greeting message={msg}></Greeting> : null }
                <Button onClick={this.toggleShow}></Button>
            </div>
        )
    }
}

const Button = ({onClick}) => (
    <button onClick={onClick} type="button">Toggle Show Way 2</button>
)


const Greeting = ({message}) => <h4>{message}</h4>;

export default GreeterWay2;