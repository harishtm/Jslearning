import React, { Component } from 'react';

// React ...props syntax (destructuring)

class GreeterWay5 extends Component {
    render() {
        const params = {
            subject: 'React',
            description: 'Your component library way5'
        };
        return(
            <div>
                <Greeting {...params}></Greeting>
            </div>
        )
    }
}

const Greeting = ({subject, description}) => (
    <div>
        <Title title={`Welcome to ${subject}`}></Title>
        <Description description={description}></Description>
    </div>
)

const Title = ({title}) => (<h4>{title}</h4>);

const Description = ({description}) => (<p>{description}</p>)

export default GreeterWay5;