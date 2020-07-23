import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: '50vh',
        background: 'linear-gradient(45deg, #FE6888 30%, #FF8E53 90%)'
    }
})

export const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
                This is a button
            </Button>
        </div>
    )
}
