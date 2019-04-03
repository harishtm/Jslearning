import React, { Component } from 'react';

// React props with default value

class GreeterWay7 extends Component {
    render() {
        const params = {description: 'Your New Component Library'}
        return (
            <div>
                <Greeting {...params}></Greeting>
            </div>
        )
    }
}

const Greeting = ({subject, description}) => {
    // flower braces as return is used
    subject = subject || 'Default Text goes here....';
    return(
        <div>
            <Title title={`Welcome to ${subject}`}></Title>
            <Description desc={description}></Description>
        </div>
    )
    
}

const Title = ({title}) => (
    <h4>{title}</h4>
)

const Description = ({desc}) => {
    return(
        <p>{desc}</p>
    )
}

export default GreeterWay7;