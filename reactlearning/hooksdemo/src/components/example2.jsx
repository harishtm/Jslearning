import React, { useState } from 'react';

/* With hooks

// With Hooks there is no need for this refactoring.
// Side-effects and state are finally available in React function components.
// That’s why a rebranding from functional stateless components to function components would be reasonable.

*/


function Counter2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click Me </button>
        </div>
    )
}

export default Counter2;