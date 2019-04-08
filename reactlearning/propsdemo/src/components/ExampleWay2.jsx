import React, { Component } from 'react';

// How to pass "Component" as Props

class ExampleWay2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Test Name',
            avatharUrl: '../logo.svg'
        }
    }

    render() {
        const user = this.state;
        return (
            <div>
                <h4>Way2</h4>
                <User user={user}></User>
            </div>
        )
    }
}

const User = ({user}) => (
    <Profile user={user}>
        <AvatarRound user={user}></AvatarRound>
    </Profile>
);

const Profile = ({user, children}) => (
    <div className="profile">
        <div>{children}</div>
        <div><p>{user.name}</p></div>
    </div>
)

const AvatarRound = ({user}) => (
    <img className="round" alt="avatar" src={user.avatharUrl}/>
)

export default ExampleWay2;