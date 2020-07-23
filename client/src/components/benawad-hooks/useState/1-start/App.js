import React, { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(10)

    return (
        <>
            <div>
                {/* Using updater function. */}
                {/* Avoids race conditions and two updates happening at the same time. :-) */}

                <button
                    onClick={() => setCount((currentCount) => currentCount + 1)}
                    type="button"
                >
                    +
                </button>
                <div>{count}</div>
            </div>
        </>
    )
}

export default App
