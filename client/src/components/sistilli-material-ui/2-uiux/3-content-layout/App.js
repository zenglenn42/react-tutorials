import React from 'react'
import { Grid } from '@material-ui/core'

export const App = () => {
    return (
        <Grid container direction="column">
            <Grid item>This is where the header will be</Grid>
            <Grid container item>
                <Grid item xs={0} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    This is where the content will be This is where the content
                    will be This is where the content will be This is where the
                    content will be This is where the content will be This is
                    where the content will be This is where the content will be
                    This is where the content will be This is where the content
                    will be
                </Grid>
                <Grid item xs={0} sm={2}></Grid>
            </Grid>
        </Grid>
    )
}
