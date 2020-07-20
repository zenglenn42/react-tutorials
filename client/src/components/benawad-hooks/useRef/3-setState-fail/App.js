import React, { useState } from 'react'
import Hello from './Hello'
import { Button, Divider, Typography } from '@material-ui/core'

export const App = () => {
    const [showHello, setShowHello] = useState(true)

    return (
        <>
            <Typography paragraph>
                For this demo, please open up the console window and be
                connected to the internet.
            </Typography>
            <Typography paragraph>
                You'll click the 'FETCH' button first and then quickly click the
                'TOGGLE MOUNT' button.
            </Typography>
            <Typography paragraph>
                You should see an error in the console indicating setState fails
                because the {'<Hello/> '}
                component is unmounted at the time. We'll fix this scenario in
                the next demo using a ref variable that guards the setState
                logic for mounted conditions.
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
