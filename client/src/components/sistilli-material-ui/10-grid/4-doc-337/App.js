import React from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core'

const useClasses = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: '1px solid lightgray',
    },
}))

export const CenteredGrid = () => {
    const classes = useClasses()

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                {/* <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid> */}
                <Grid item xs={7}>
                    <Paper className={classes.paper}>xs=7</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
