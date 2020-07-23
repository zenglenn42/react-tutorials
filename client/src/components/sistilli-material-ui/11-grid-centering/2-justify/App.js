import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    row: {
        border: '1px solid black',
        borderRadius: '0.25em',
        backgroundColor: 'darkgray',
        height: theme.spacing(20)
    },
    cell: {
        backgroundColor: 'lightgray',
        borderRadius: '0.25em',
        margin: theme.spacing(0.5, 0.5)
    },
    cell1: {
        padding: theme.spacing(0.6, 1)
    },
    cell2: {
        padding: theme.spacing(1.4, 1)
    },
    cell3: {
        padding: theme.spacing(2.2, 1)
    }
}))

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="caption">
                {
                    '<Grid container direction="row" justify="flex-start" alignItems="center">'
                }
            </Typography>
            <Grid
                className={classes.row}
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
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
            <br />
            <br />

            <Typography variant="caption">
                {
                    '<Grid container direction="row" justify="center" alignItems="center">'
                }
            </Typography>
            <Grid
                className={classes.row}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
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
            <br />
            <br />

            <Typography variant="caption">
                {
                    '<Grid container direction="row" justify="flex-end" alignItems="center">'
                }
            </Typography>
            <Grid
                className={classes.row}
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
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
            <br />
            <br />

            <Typography variant="caption">
                {
                    '<Grid container direction="row" justify="space-between" alignItems="center">'
                }
            </Typography>
            <Grid
                className={classes.row}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
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
            <br />
            <br />

            <Typography variant="caption">
                {
                    '<Grid container direction="row" justify="space-around" alignItems="center">'
                }
            </Typography>
            <Grid
                className={classes.row}
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
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
            <br />
            <br />

            <Typography variant="caption">
                {
                    '<Grid container direction="row" justify="space-evenly" alignItems="center">'
                }
            </Typography>
            <Grid
                className={classes.row}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
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
            <br />
            <br />
        </>
    )
}
