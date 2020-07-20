import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    buttonStyle: {
        color: 'red',
    },
})

export const App = () => {
    const classes = useStyles()

    return (
        <>
            <Button className={classes.buttonStyle}>Small buttton</Button>
            <hr />
            classes =<pre>{JSON.stringify(classes, null, 2)}</pre>
        </>
    )
}
