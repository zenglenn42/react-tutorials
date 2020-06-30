import React from 'react'
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core'

const useClasses = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
    nestedGrid: {
        border: "1px solid red",
        backgroundColor: "lightgray"

    }
}))

export const CenteredGrid = () => {
    const classes = useClasses()

    return (
        <div className={classes.root}>
            <Typography gutterBottom={2}>Nested row grid inside column grid.</Typography>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid className={classes.nestedGrid} item xs={12} container spacing={1}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
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
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

