import React, { Component } from 'react';
import axios from 'axios';


export default class PersonList extends Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;

            /* That's actually a feature of ES6. 
               If the key matches an existing variable name you can use this shorthand syntax.
               So instead of writing value: value you can simply write value as key and variable name are the same.*/

            this.setState({ persons });
        })
    }

    render() {
        return (
            /*
            <div>
                <ul>
                    { this.state.persons.map(person => <li>{ person.name }</li>)}
                </ul>
            </div>
            */
           <div>
               <table border={1}>
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                           <th>UserName</th>
                           <th>Email</th>
                       </tr>
                   </thead>
                   <tbody>
                       { this.state.persons.map(person => 
                                                <tr key={person.id}>
                                                    <td>{person.id}</td>
                                                    <td>{person.name}</td>
                                                    <td>{person.username}</td>
                                                    <td>{person.email}</td>
                                                </tr>)}
                   </tbody>
               </table>
           </div>
        )
    }
}