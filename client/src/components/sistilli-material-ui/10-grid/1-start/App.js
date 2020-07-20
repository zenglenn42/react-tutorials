import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'

const useClasses = makeStyles({
    blueItem: {
        backgroundColor: 'blue',
        height: '200px',
    },
    redItem: {
        backgroundColor: 'red',
    },
    greenItem: {
        backgroundColor: 'green',
    },
})

export const App = () => {
    const classes = useClasses()
    return (
        <Grid container>
            <Grid item xs={4} className={classes.blueItem} />
            <Grid item xs={4} className={classes.redItem} />
            <Grid item xs={4} className={classes.greenItem} />
        </Grid>
    )
}
