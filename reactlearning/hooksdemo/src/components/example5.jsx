import React, { useState, useEffect } from 'react';

function Timer() {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        setInterval(() => console.log('tick'), 8000)
    })

    return (
        <div>
            {!isOn && (
                <button type="button" onClick={() => setIsOn(true)}> Start </button>
            )}

            {isOn && (
                <button type="button" onClick={() => setIsOn(false)}> Stop </button>
            )}
        </div>
    )
}

export default Timer;