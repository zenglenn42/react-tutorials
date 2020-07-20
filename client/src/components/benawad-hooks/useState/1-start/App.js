import React, { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(10)

    return (
        <>
            {/* 
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <div>{count}</div>
            </div>
            */}

            <div>
                {/* Using updater function. */}
                {/* Avoids race conditions and two updates happening at the same time. :-) */}

                <button
                    onClick={() => setCount((currentCount) => currentCount + 1)}
                >
                    +
                </button>
                <div>{count}</div>
            </div>
        </>
    )
}

export default App
