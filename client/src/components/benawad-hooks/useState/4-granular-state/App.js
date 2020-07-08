import React, { useState } from 'react'

export const App = () => {
    // Can have as many useStates as we want.

    const [ count, setCount] = useState(10)
    const [ count2, setCount2] = useState(20)

    // When to separate versus aggregate state?  
    // Aggregate state that gets updated at the same time.

    return (
        <div>
            <button onClick={() => {
                setCount(c => c + 1)    // probably should combine state
                setCount2(c => c + 1)   // into 1 object sinc we're updating together here.
            }}
            >
                +
            </button>
            <div>count 1: {count}</div>
            <div>count 2: {count2}</div>
        </div>
    )
}

export default App;