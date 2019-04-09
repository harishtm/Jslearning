import React, { useState } from 'react';


// You are able to remove an item from the list based on the identifier you pass to the handler.
// The handler then filters the list and sets the new state of the list with the setList function.

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


function ProcessData() {

    function onRemoveItem(id) {
        const newList = data.filter(item => item.id !== id);
        setList(newList);
    }

    const [data, setList] = useState(INITIAL_LIST);

    return(
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                    <button type="button" onClick={() => onRemoveItem(item.id)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ProcessData;