import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'

export const App = () => {
    return (
        <div style={{ margin: 0 }}>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid container item>
                    <Grid item xs={false} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        content
                    </Grid>
                    <Grid item xs={false} sm={2}></Grid>
                </Grid>
            </Grid>
        </div>
    )
}
