import React, { useState } from 'react'
import Hello from './Hello'

export const App = () => {
    const [showHello, setShowHello] = useState(true)

    return (
        <div>
            <button onClick={() => setShowHello(!showHello)}>toggle: mount</button>
            {showHello && <Hello />}
        </div>
    )
}

export default App;