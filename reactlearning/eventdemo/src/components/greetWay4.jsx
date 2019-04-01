import React, { Component } from 'react';

class GreeterWay4 extends Component {
    render () {
        const params = {
            subject: 'React',
            description: 'Your new component library ...'
        }
        return (
            <div>
                <Greeting greeting={params}></Greeting>
            </div>
        )
    }
}

const Greeting = ({greeting}) => (
    <div>
        <Titile title={`Welcome to ${greeting.subject}`}></Titile>
        <Description description={greeting.description}></Description>
    </div>
)

const Titile = ({title}) => <h4>{title}</h4>;

const Description = ({description}) => <p>{description}</p>


export default GreeterWay4;