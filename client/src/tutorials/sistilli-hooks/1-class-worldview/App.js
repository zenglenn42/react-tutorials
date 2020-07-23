/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import logo from './logo.svg'
import './App.css'

export class App extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    render() {
        const handleIncrementClick = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }

        const buttonSpacing = {
            marginBottom: '3rem'
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>The count is: {this.state.count}</h2>
                    <Button
                        style={buttonSpacing}
                        onClick={handleIncrementClick}
                        variant="contained"
                    >
                        Increment Count
                    </Button>
                </header>
            </div>
        )
    }
}

export default App
