import React from 'react'
import { Typography, createMuiTheme, ThemeProvider, Paper } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
})

const AppDark = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Paper>
                    <Typography variant="h1">
                        This is my dark theme.
                    </Typography>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default AppDark
