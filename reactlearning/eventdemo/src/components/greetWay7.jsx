import React, { Component } from 'react';

// React props with default value

class GreeterWay7 extends Component {
    render() {
        const params = {description: 'Your New Component Library'}
        return (
            <div>
                <GreetingWay1 {...params}></GreetingWay1>
                <GreetingWay2 {...params}></GreetingWay2>
                <GreetingWay3 {...params}></GreetingWay3>
                <GreetingWay4></GreetingWay4>
            </div>
        )
    }
}

const GreetingWay1 = ({subject, description}) => {
    // flower braces as return is used
    subject = subject || 'Default Text goes here....';
    return(
        <div>
            <Title title={`Welcome to ${subject}`}></Title>
            <Description desc={description}></Description>
        </div>
    )
    
}

const GreetingWay2 = ({subject, description}) => (
    <div>
        <Title title={`Welcome to ${subject || 'Default subject'}`}></Title>
        <Description desc={description}></Description>
    </div>
)

const GreetingWay3 = ({subject = 'Default Text', description}) => {
    return (
        <div>
            <Title title={`Welcome to ${subject}`}></Title>
            <Description desc={description}></Description>
        </div>
    )
}

const GreetingWay4 = ({subject, description}) => (
    <div>
        <Title title={`Welcome to ${subject || 'Default subject'}`}></Title>
        <Description desc={description}></Description>
    </div>
)

GreetingWay4.defaultProps = {
    subject: 'Default Msg',
    description: 'Default prop Componet'
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