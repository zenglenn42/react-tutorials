import React from 'react'
import TypographyDemo from './TypographyDemo'
import { purple, teal, red } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const overrideTheme = createMuiTheme({
    palette: {
        primary: purple
    },
    typography: {
        h1: {
            fontSize: '2em'
        }
    }
})

export const App = () => {
    return (
        <div>
            <ThemeProvider theme={overrideTheme}>
                <TypographyDemo />
                <TypographyDemo color={teal} />
                <TypographyDemo color={red} />
                <TypographyDemo color="black" />
            </ThemeProvider>
        </div>
    )
}
