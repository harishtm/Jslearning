import React, { Component } from 'react';

// The concept of children as a function or child as a function, also called render prop
// is one of the advanced patterns in React (next to higher-order components)

const Converter = () => (
    <div>
        <h4>US Dollars to Euro:</h4>
        <Amount render={amount => <Euro amount={amount}/>} />

        <h4>US Dollar to Pound:</h4>
        <Amount render={amount => <Pound amount={amount}/>} />
    </div>
)


class Amount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: 0
        }
    }

    onIncrement = () => {
        this.setState(state => ({ amount: state.amount + 1}));
    }

    onDecrement = () => {
        this.setState(state => ({ amount: state.amount - 1}));
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.onIncrement}>
                    Increment
                </button>
                <button type="button" onClick={this.onDecrement}>
                    Decrement
                </button>

                <p>US Dollar: {this.state.amount}</p>
                {/* {this.props.render(this.state.amount)} */}
            </div>
        )
    }
}

const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({amount}) => <p> Pound: {amount * 0.76}</p>;


export default Amount;