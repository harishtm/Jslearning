import React, { Component } from 'react';
import API from './api';


export default class PersonReusability extends Component {
    
    handleSubmit = event => {
        event.preventDefault();
    
    API.delete(`users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
}