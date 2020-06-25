import React from 'react'
import { Typography, createMuiTheme, ThemeProvider, Paper } from '@material-ui/core'

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      
      text: {
          
        // Prevent secondary text color from fading to 'white' when applying this
        // palette type.  Otherwise it affects contents of the slide-out list drawer.
        // Tutorial authors and any other secondary text in typography components
        // become invisible since we have white-on-white situation.

          secondary: "default"
      }
    },
});

export const App = () => {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <Paper>
                    <Typography variant="h1">
                        This is my dark typography
                    </Typography>
                </Paper>
            </ThemeProvider>
        </div>
    )
}
