import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import logo from './logo.svg'
import Counter from './Counter_class'
import './App.css'

const buttonSpacing = {
    marginBottom: '3rem'
}

export class App extends Component {
    constructor() {
        super()
        this.state = {
            showingCounter: false
        }
    }

    render() {
        const handleShowingCounter = () => {
            this.setState((prevState) => ({
                showingCounter: !prevState.showingCounter
            }))
        }

        const { showingCounter } = this.state
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button
                        style={buttonSpacing}
                        onClick={handleShowingCounter}
                        variant="contained"
                    >
                        Show / Hide counter
                    </Button>
                    {showingCounter && <Counter />}
                </header>
            </div>
        )
    }
}

export default App
