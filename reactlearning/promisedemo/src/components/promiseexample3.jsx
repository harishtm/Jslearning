import React, { Component } from 'react';
import axios from 'axios';


export default class PersonDelete extends Component {

    state = {
        id: ''
    };

    handleChange = event => {
        this.setState({ id: event.target.value })
    };

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Person Id:</label>
                    <input type="text" name="id" onChange={this.handleChange} />
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}