import React from 'react'
import { Typography } from '@material-ui/core'

export function App() {
    return (
        <div style={{overflow: "scroll"}}>
                <h1>I'm an {'<'}h1{'>'} tag</h1>
                <Typography>
                    Hello there (i'm typography)
                </Typography>
                <Typography color="primary">
                    Hello there (color="primary")
                </Typography>
                <Typography variant="h1" color="primary">
                    Hello there
                </Typography>
                <pre>
                    {'<'}Typography variant="h1"{'>'}Hello there{'<'}/Typography{'>'}
                </pre>
        </div>
    )
}