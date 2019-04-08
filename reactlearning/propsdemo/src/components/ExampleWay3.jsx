import React, { Component } from 'react';

// pass more than one component and place them at different positions
// Then again you don’t need to use the children prop and instead you just use regular props

class ExampleWay3 extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Test Name",
            avatharUrl: "../logo.svg",
            biography: "This is a react props demo"
        }
    }
    render() {
        const user = this.state;
        return(
            <div>
                <h4>Way3</h4>
                <User user={user}/>
            </div>
        )
    }
}

const User = ({ user }) => (
    <Profile
        user={user}
        avatar={<AvataRound user={user}/>}
        biography={<Biography user={user}/>}
    />
);

const Profile = ({ user, avatar, biography}) => (
    <div className="profile">
        <div>{avatar}</div>
        <div><p>{user.name}</p></div>
        {biography}
    </div>
);

const AvataRound = ({user}) => (
    <img className="round" alt="avatar" src={user.avatarUrl}/>
);

const Biography = ({user}) => (
    <p className="flat">{user.biography}</p>
);


export default ExampleWay3;