import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    buttonSpacing: {
        marginBottom: '3rem',
    },
})

export const App = () => {
    const [count, setCount] = useState(0)

    const handleIncrementClick = () => {
        setCount(count + 1)
    }

    const classes = useStyles()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>The count is: {count}</h2>
                <Button
                    className={classes.buttonSpacing}
                    onClick={handleIncrementClick}
                    variant="contained"
                >
                    Increment Count
                </Button>
            </header>
        </div>
    )
}

export default App
