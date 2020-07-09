import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'

const useStyles = makeStyles(theme => ({
    grid: {
        border: "1px solid darkgrey"
    },
    item: {
        backgroundColor: "lightgrey",
        border: "1px solid white",
        borderRadius: "0.2em",
        padding: "4px",
    }
}))

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="caption">
            {'<Grid container>'}
            </Typography>

            <Grid className={classes.grid} container>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="center">'}
            </Typography>
            
            <Grid className={classes.grid} container justify="center">
                <Grid className={classes.item} item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="flex-end">'}
            </Typography>
            
            <Grid className={classes.grid} container justify="flex-end">
                <Grid className={classes.item} item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="space-between">'}
            </Typography>
            
            <Grid className={classes.grid} container justify="space-between">
                <Grid className={classes.item} item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="space-around">'}
            </Typography>
            
            <Grid className={classes.grid} container justify="space-around">
                <Grid className={classes.item} item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="space-evenly">'}
            </Typography>
            
            <Grid className={classes.grid} container justify="space-evenly">
                <Grid className={classes.item} item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.item} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>
        </>
    )
}