import React from 'react'
import TypographyDemo from './TypographyDemo'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple, green } from '@material-ui/core/colors'

const overrideTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green
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
            </ThemeProvider>
        </div>
    )
}
