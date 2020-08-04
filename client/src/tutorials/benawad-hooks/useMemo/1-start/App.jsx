import React, { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
