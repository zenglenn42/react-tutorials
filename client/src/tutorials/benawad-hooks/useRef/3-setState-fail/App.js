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
                You should see an error in the console indicating setState fails
                because the &lt;Hello/&gt; component is unmounted at the time.
                We&apos;ll fix this scenario in the next demo using a ref
                variable that guards the setState logic for mounted conditions.
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
