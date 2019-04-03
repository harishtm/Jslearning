import React, { Component } from 'react';

// How to pass Props from child to parent Component?

class GreeterWay3 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        };
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow}));
    };

    render () {

        const msg = 'Welcome to React';
        return(
            <div>
                <Greeting message={msg} isShow={this.state.isShow}></Greeting>
                <Button onClick={this.toggleShow}></Button>
            </div>
        )
    }
}

const Button = ({onClick}) => (
    <button onClick={onClick} type="button">
    Toggle Show Way3
    </button>
);

const Greeting = ({message, isShow}) => isShow ? <h4>{message}</h4> : null;


export default GreeterWay3;
