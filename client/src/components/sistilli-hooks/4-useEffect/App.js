import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import logo from './logo.svg'
import Counter from './Counter_hooks'
import './App.css'

const useStyles = makeStyles({
    buttonSpacing: {
        marginBottom: '3rem'
    }
})

export const App = () => {
    const [showingCounter, setShowingCounter] = useState(false)

    const handleShowingCounterOnClick = () => {
        setShowingCounter(!showingCounter)
    }

    const classes = useStyles()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button
                    className={classes.buttonSpacing}
                    onClick={handleShowingCounterOnClick}
                    variant="contained"
                >
                    Show / Hide counter
                </Button>
                {showingCounter && <Counter />}
            </header>
        </div>
    )
}

export default App
