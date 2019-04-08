import React, { Component } from 'react';

// React's children prop
// Note: argument should be "children" only to get the contents

class ExampleWay1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    }

    toggleShow = () => {
        this.setState(state => ({isShow: !state.isShow}))
    }

    render() {
        const msg = 'React Props example'
        return(
            <div>
                <h4>Way1</h4>
                <Greeting message={msg} isShow={ this.state.isShow }></Greeting>
                <Button onClick={this.toggleShow}>Toggle HTML Text</Button>
            </div>
        )
    }
}

const Greeting = ({message, isShow}) => isShow ? <h4>{message}</h4> : null;

const Button = ({onClick, children}) => (
    // parameter "children" should be exact
    <button onClick={onClick} type="button">
        {children}
    </button>
);

export default ExampleWay1;