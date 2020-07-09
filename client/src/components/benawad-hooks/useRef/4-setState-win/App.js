import React, { useState } from 'react'
import Hello from './Hello'
import { Button, Divider, Typography } from '@material-ui/core'

export const App = () => {
    const [showHello, setShowHello] = useState(true)

    return (
        <>
            <Typography paragraph>
                For this demo, please open up the console window and be connected to the internet.
            </Typography>
            <Typography paragraph>
                You'll click the 'FETCH' button first and then quickly click the 'TOGGLE MOUNT' button.
            </Typography>
            <Typography paragraph>
                You should see <em>no error</em> in the console since we're using a ref to prevent setState against unmounted components.
            </Typography>
            <Divider /><br/>

            <Button variant="contained" onClick={() => setShowHello(!showHello)}>
                2. toggle mount
            </Button><br/><br/>

            {showHello && <Hello />}
        </>
    )
}
