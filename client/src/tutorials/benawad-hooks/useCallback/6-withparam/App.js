import React, { useCallback, useState } from 'react'
import { Hello } from './Hello'

export function App() {
    const [count, setCount] = useState(0)

    const increment = useCallback(
        (n) => {
            setCount((c) => c + n)
        },
        [setCount]
    )

    return (
        <div>
            <Hello increment={increment} />
            <div>count: {count}</div>
        </div>
    )
}
