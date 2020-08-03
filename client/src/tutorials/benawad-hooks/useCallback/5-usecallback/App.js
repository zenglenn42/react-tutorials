import React, { useCallback, useState } from 'react'
import { Hello } from './Hello'

export function App() {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount((c) => c + 1)
    }, [setCount])

    return (
        <div>
            <Hello increment={increment} />
            <div>count: {count}</div>
        </div>
    )
}
