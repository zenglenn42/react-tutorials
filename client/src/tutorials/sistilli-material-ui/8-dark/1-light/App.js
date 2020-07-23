import React from 'react'
import { Paper, Typography, Button, Grid } from '@material-ui/core'

export const App = () => {
    return (
        <Paper style={{ height: '80%' }}>
            <Grid container direction="column">
                <Typography variant="h1">This is my App!</Typography>
                <Button variant="contained" color="primary" fullWidth>
                    This is a button
                </Button>
                <Button variant="contained" color="secondary" fullWidth>
                    This is a button
                </Button>
            </Grid>
        </Paper>
    )
}
