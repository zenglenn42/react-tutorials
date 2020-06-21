import React from 'react'
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

export function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div>
                    <Button color="primary" variant="outlined">This is our first button (color="primary")</Button>
                </div>
                <div>
                    <Button color="secondary" variant="outlined">This is our first button (color="secondary")</Button>
                </div>
            </ThemeProvider>
        </div>
    )
}