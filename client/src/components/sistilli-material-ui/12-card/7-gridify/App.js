import React from 'react'
import SimpleCard from './SimpleCard'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
}))

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <Grid
                className={classes.gridContainer}
                container
                spacing={2}
                justify="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <SimpleCard variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SimpleCard variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SimpleCard variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SimpleCard variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SimpleCard variant="outlined" />
                </Grid>
            </Grid>
        </>
    )
}

export default App
