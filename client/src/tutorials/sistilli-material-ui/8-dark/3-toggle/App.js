import React, { useState } from 'react'
import {
    Paper,
    Typography,
    Button,
    Grid,
    createMuiTheme,
    ThemeProvider,
    Switch
} from '@material-ui/core'

export const App = () => {
    const [darkMode, setDarkMode] = useState(false)

    const darkTheme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',

            text: {
                // Prevent secondary text color from fading to 'white' when applying this
                // palette type.  Otherwise it affects contents of the slide-out list drawer.
                // Tutorial authors and any other secondary text in typography components
                // become invisible since we have white-on-white situation.

                secondary: 'default'
            }
        }
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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Switch
                            id="toggleMode"
                            checked={darkMode}
                            onChange={() => {
                                setDarkMode(!darkMode)
                            }}
                        />
                        <label htmlFor="toggleMode">
                            Toggle light / dark mode
                        </label>
                    </div>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}
