import React, { useState } from 'react';


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