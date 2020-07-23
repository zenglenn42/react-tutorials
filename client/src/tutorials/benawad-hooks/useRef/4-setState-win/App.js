import React, { useState } from 'react'
import { Button, Divider, Typography } from '@material-ui/core'
import Hello from './Hello'

export const App = () => {
    const [showHello, setShowHello] = useState(true)

    return (
        <>
            <Typography paragraph>
                For this demo, please open up the console window and be
                connected to the internet.
            </Typography>
            <Typography paragraph>
                You&apos;ll click the &apos;FETCH&apos; button first and then
                quickly click the &apos;TOGGLE MOUNT&apos; button.
            </Typography>
            <Typography paragraph>
                You should see no error in the console since we&apos;re using a
                ref to prevent setState against unmounted components.
            </Typography>
            <Divider />
            <br />

            <Button
                variant="contained"
                onClick={() => setShowHello(!showHello)}
            >
                2. toggle mount
            </Button>
            <br />
            <br />

            {showHello && <Hello />}
        </>
    )
}

export default App
