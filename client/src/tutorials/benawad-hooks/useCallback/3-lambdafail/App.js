import React, { useState } from 'react'
import { Hello } from './Hello'

export function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* Key: The increment lambda is being created on every single render. */}

            <Hello increment={() => setCount(count + 1)} />
            <div>count: {count}</div>
        </div>
    )
}
