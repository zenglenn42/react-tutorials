import React from 'react'
import {
    makeStyles,
    Button,
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core'
import { green, purple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '50vh',
        background: 'linear-gradient(45deg, #FE6888 30%, #FF8E53 90%)'
    },
    button: {
        backgroundColor: 'blue',
        [theme.breakpoints.up('sm')]: {
            color: 'white',
            backgroundColor: 'black'
        }
    }
}))

const theme = createMuiTheme((theme) => {
    return {
        palette: {
            primary: green,
            secondary: purple
        }
    }
})

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                    >
                        This is a button (I change to blue on small browser
                        windows.)
                    </Button>
                </ThemeProvider>
            </div>
        </>
    )
}
