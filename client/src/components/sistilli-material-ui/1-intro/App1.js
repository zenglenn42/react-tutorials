import React from 'react'
import { Button } from '@material-ui/core'

export function App() {
    return (
        <div className="App">
            <div>
                <Button>This is our first button</Button>
            </div>
            <div>
                <Button variant="outlined" disabled>This is our first button (disabled)</Button>
            </div>
            <div>
                <Button variant="outlined">This is our first button (variant="outlined")</Button>
            </div>
            <div>
                <Button variant="contained">This is our first button (variant="contained")</Button>
            </div>
            <div>
                <Button variant="outlined" fullWidth>This is our first button (fullWidth)</Button>
            </div>
            <div>
                <Button color="primary" variant="outlined">This is our first button (color="primary")</Button>
            </div>
            <div>
                <Button color="secondary" variant="outlined">This is our first button (color="secondary")</Button>
            </div>
        </div>
    )
}