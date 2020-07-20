import React from 'react'
import SimpleTable from './SimpleTable'
import {
    createMuiTheme,
    ThemeProvider,
    Typography,
    makeStyles,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

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

const useStyles = makeStyles({
    colorPrimary: {
        color: grey[900],
    },
})

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <SimpleTable />
                <Typography
                    classes={{ colorPrimary: classes.colorPrimary }}
                    color="primary"
                    variant="caption"
                >
                    Medium-sized table (default)
                </Typography>
                <br />
                <br />
                <hr />
                <br />

                <SimpleTable size="small" />
                <Typography
                    classes={{ colorPrimary: classes.colorPrimary }}
                    color="primary"
                    variant="caption"
                >
                    Small-sized table (size="small")
                </Typography>
            </ThemeProvider>
        </>
    )
}

export default App
