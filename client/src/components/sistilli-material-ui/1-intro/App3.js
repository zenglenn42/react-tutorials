import React from 'react'
import { Typography } from '@material-ui/core'

export function App() {
    return (
        <div className="App" style={{overflow: "scroll"}}>
                <h1>I'm an {'<'}h1{'>'} tag</h1>
                <Typography>
                    Hello there (i'm typography)
                </Typography>
                <Typography color="primary">
                    Hello there (color="primary")
                </Typography>
                <Typography variant="h1" color="primary">
                    Hello there (variant="h1")
                </Typography>
        </div>
    )
}