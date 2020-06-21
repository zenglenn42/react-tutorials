import React from 'react'
import { Grid } from '@material-ui/core'

export const App = () => {
    return (
        <Grid container direction="column">
            <Grid item>This is where the header will be</Grid>
            <Grid item>This is where the content will be</Grid>
        </Grid>
    )
}

