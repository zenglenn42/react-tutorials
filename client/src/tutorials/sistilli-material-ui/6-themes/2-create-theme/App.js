import React from 'react'
import {
    makeStyles,
    Button,
    Typography,
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core'
import { green, purple } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        height: '50vh',
        background: 'linear-gradient(45deg, #FE6888 30%, #FF8E53 90%)'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: purple
    }
})

export const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">
                    This is a button
                </Button>
                <Button variant="contained" color="secondary">
                    This is a button
                </Button>
                <Typography variant="h1">This is my typography</Typography>
            </ThemeProvider>
        </div>
    )
}
