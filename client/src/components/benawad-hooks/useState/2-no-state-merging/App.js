/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'

export const App = () => {
    const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 })

    return (
        <div>
            <button
                onClick={() =>
                    setCount((currentCount) => ({
                        count: currentCount.count + 1,
                    }))
                }
                type="button"
            >
                +
            </button>
            <div>count 1: {count}</div>
            <div>count 2: {count2}</div>
            {/* NB: count2 will disappear(!) because setCount     */}
            {/*     does not merge state like this.setState does. */}
        </div>
    )
}

export default App
