import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles, Paper } from '@material-ui/core'
import PaperDemo from './PaperDemo'

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

const useStyles = makeStyles((theme) => {
    return ({
        margin: {
            margin: theme.spacing(1),
        }
    })
})

export const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.margin}>
            <ThemeProvider theme={darkTheme}>
                <PaperDemo />
            </ThemeProvider>
        </div>
    )
}
