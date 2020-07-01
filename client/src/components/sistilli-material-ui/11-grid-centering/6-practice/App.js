import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'

export const App = () => {
    return (
        <>
            <Typography variant="caption">
            {'<Grid container>'}
            </Typography>

            <Grid container>
                <Grid item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="center">'}
            </Typography>
            
            <Grid container justify="center">
                <Grid item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="flex-end">'}
            </Typography>
            
            <Grid container justify="flex-end">
                <Grid item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="space-between">'}
            </Typography>
            
            <Grid container justify="space-between">
                <Grid item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="space-around">'}
            </Typography>
            
            <Grid container justify="space-around">
                <Grid item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>

            <Typography variant="caption">
            {'<Grid container justify="space-evenly">'}
            </Typography>
            
            <Grid container justify="space-evenly">
                <Grid item>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <br/><br/>
        </>
    )
}