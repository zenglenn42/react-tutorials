import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import Hello from './Hello'

export const App = () => {
    const [showHello, setShowHello] = useState(true)

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setShowHello(!showHello)}
            >
                toggle mount
            </Button>
            <br />
            <br />
            {showHello && <Hello />}
        </div>
    )
}

export default App
