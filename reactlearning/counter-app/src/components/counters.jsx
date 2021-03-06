import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters : [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0},
        ]
     };

     handleDelete = (counterId) => {
        // console.log('Event triggered', counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        // this.setState({counters: counters})
        // As the key and value are same we write it as 
        this.setState({ counters })
     };

    render() { 
        return (
            <div>
                { this.state.counters.map(
                        counter => <Counter key={counter.id}
                                            id={counter.id}
                                            value={counter.value}
                                            onDelete={this.handleDelete}>
                                   </Counter>
                    )
                }
            </div>
        );
    }
}
 
export default Counters;