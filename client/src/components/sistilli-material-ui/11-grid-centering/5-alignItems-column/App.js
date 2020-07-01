import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    major: {
        border: "1px solid black",
        borderRadius: "0.25em",
        backgroundColor: "darkgray",
        height: theme.spacing(40)
    },
    cell: {
        backgroundColor: "lightgray",
        borderRadius: "0.25em",
        margin: theme.spacing(0.5, 0.5),
    },
    cell1: {
        padding: theme.spacing(1, 0.6),
    },
    cell2: {
        padding: theme.spacing(1, 1.4),
    },
    cell3: {
        padding: theme.spacing(1, 2.2),
    },
}))

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="caption">
                {'<Grid container direction="column" justify="center" alignItems="flex-start">'}
            </Typography>
            <Grid className={classes.major} container direction="column" justify="center" alignItems="flex-start">
                <Grid className={clsx(classes.cell, classes.cell1)} item>
                    Cell 1
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell2)} item>
                    Cell 2
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell3)} item>
                    Cell 3
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
                {'<Grid container direction="column" justify="center" alignItems="center">'}
            </Typography>
            <Grid className={classes.major} container direction="column" justify="center" alignItems="center">
                <Grid className={clsx(classes.cell, classes.cell1)} item>
                    Cell 1
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell2)} item>
                    Cell 2
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell3)} item>
                    Cell 3
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
                {'<Grid container direction="column" justify="center" alignItems="flex-end">'}
            </Typography>
            <Grid className={classes.major} container direction="column" justify="center" alignItems="flex-end">
                <Grid className={clsx(classes.cell, classes.cell1)} item>
                    Cell 1
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell2)} item>
                    Cell 2
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell3)} item>
                    Cell 3
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
                {'<Grid container direction="column" justify="center" alignItems="stretch">'}
            </Typography>
            <Grid className={classes.major} container direction="column" justify="center" alignItems="stretch">
                <Grid className={clsx(classes.cell, classes.cell1)} item>
                    Cell 1
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell2)} item>
                    Cell 2
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell3)} item>
                    Cell 3
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
                {'<Grid container direction="column" justify="center" alignItems="baseline">'}
            </Typography>
            <Grid className={classes.major} container direction="column" justify="center" alignItems="baseline">
                <Grid className={clsx(classes.cell, classes.cell1)} item>
                    Cell 1
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell2)} item>
                    Cell 2
                </Grid>
                <Grid className={clsx(classes.cell, classes.cell3)} item>
                    Cell 3
                </Grid>
            </Grid>
            <br/><br/>
        </>
    )
}