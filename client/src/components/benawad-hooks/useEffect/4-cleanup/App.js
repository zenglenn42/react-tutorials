import React, { useState } from 'react'
import Hello from './Hello'
import { Button } from '@material-ui/core'

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
