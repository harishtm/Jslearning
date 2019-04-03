import React, { Component } from 'react';

// Another thing which builds up on top of the prop spread is the prop spread with rest.

class GreeterWay6 extends Component{
    render(){
        const params = {
            subject: 'React',
            description: 'New Component'
        }
        return(
            <div>
                <Greeting {...params}></Greeting>
            </div>
        )
    }
}

const Greeting = ({subject, ...other}) => (
    <div>
        <Titile title={subject}></Titile>
        <Description {...other}></Description>
    </div>
)

const Titile = ({title}) => (
    <h4>{`Welcome to ${title}`}</h4>
)

const Description = ({description}) => (
    <p>{description}</p>
)

export default GreeterWay6;