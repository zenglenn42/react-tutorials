import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from '@material-ui/core'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render() {
        const handleIncrementClick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        
        const buttonSpacing = {
            marginBottom: "3rem"
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>
                        The count is: {this.state.count}
                    </h2>
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
