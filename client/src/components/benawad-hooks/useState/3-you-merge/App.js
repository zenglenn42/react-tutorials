import React, { useState } from 'react'

export const App = () => {
    const [{ count, count2 }, setCount] = useState({count: 10, count2: 20})

    return (
        <div>
            <button 
                onClick={() => 
                    setCount(currentCount => ({ 
                        ...currentCount,            // That's better :-)
                        count: currentCount.count + 1 
                    }))
                }
            >
                +
            </button>
            <div>count 1: {count}</div>
            <div>count 2: {count2}</div>
        </div>
    )
}

export default App;