import React, { useState } from 'react';


// The useState hook accepts an initial state as argument and returns,
// by using array destructuring, two variables that can be named however you want to name them.
// Whereas the first variable is the actual state,
// the second variable is a function to update the state by providing a new state.


const INITIAL_LIST = [
    {
        id: '0',
        title: 'React with RxJS for State Management Tutorial',
        url:'https://www.google.com/',
    },
    {
        id: '1',
        title: 'A complete React with Apollo and GraphQL Tutorial',
        url: 'https://reactjs.org/',
    },
];


function DisplayData() {
    const [data, setList] = useState(INITIAL_LIST);

    return(
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <a href={item.url} target="_blank">{item.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default DisplayData;