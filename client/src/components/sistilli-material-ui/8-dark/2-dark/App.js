import React from 'react'
import {
    Paper,
    Typography,
    Button,
    Grid,
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core'

export const App = () => {
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',

            text: {
                // Prevent secondary text color from fading to 'white' when applying this
                // palette type.  Otherwise it affects contents of the slide-out list drawer.
                // Tutorial authors and any other secondary text in typography components
                // become invisible since we have white-on-white situation.

                secondary: 'default',
            },
        },
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Paper style={{ height: '80%' }}>
                <Grid container direction="column">
                    <Typography variant="h1">This is my App!</Typography>
                    <Button variant="contained" color="primary" fullWidth>
                        This is a primary button
                    </Button>
                    <Button variant="contained" color="secondary" fullWidth>
                        This is a secondary button
                    </Button>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}
