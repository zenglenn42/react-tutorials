import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    app: {
        overflow: 'scroll',
    },
    helloStyle: {
        fontStyle: 'oblique',
    },
    buttonStyle: {
        color: 'red',
    },
})

export function App() {
    const classes = useStyles()

    return (
        <div className={classes.app}>
            <Typography
                className={classes.helloStyle}
                variant="h1"
                color="primary"
            >
                Hello there
            </Typography>
            <Typography>Overriding fontStyle ...</Typography>
            <pre>
                const useStyles = makeStyles(
                {'{helloStyle: {fontStyle: "oblique"}}'})
            </pre>
            <pre>const classes = useStyles()</pre>
            <pre>
                {'<'}Typography className={'{'}
                {'classes.helloStyle}'} variant="h1" color="primary"{'>'}Hello
                ...
            </pre>
            <Button variant="contained">Using buttonStyle</Button>
        </div>
    )
}
