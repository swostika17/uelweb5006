import './App.css';
import React, { useState } from 'react';

function UpdateCounter() {
    const [count, setCount] = useState(0);

    // Function to increase the counter
    const increaseCounter = () => {
        setCount(count + 1);
    };

    // Function to decrease the counter
    const decreaseCounter = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <form>
                <h1>
                    Click me: {count}
                </h1>
                <button type='button' onClick={increaseCounter}>
                    Click here to Increase
                </button>
                <button type='button' onClick={decreaseCounter}>
                    Click here to Decrease
                </button>
            </form>
        </div>
    );
}

export default UpdateCounter;