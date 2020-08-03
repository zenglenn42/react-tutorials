import React, { useCallback, useState } from 'react'
// import { Hello } from './Hello'
import { Square } from './Square'

export function App() {
    const [count, setCount] = useState(0)
    const favoriteNums = [7, 21, 37]

    const increment = useCallback(
        (n) => {
            setCount((c) => c + n)
        },
        [setCount]
    )

    return (
        <div>
            {/* <Hello increment={increment} /> */}

            {favoriteNums.map((n) => {
                // :-(  Bad because onClick lambda recreates on each render.
                // return <Square onClick={() => increment(n)} n={n} key={n} />

                return <Square increment={increment} n={n} key={n} />
            })}
            <div>count: {count}</div>
        </div>
    )
}
