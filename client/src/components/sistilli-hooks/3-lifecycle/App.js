import React, { Component } from 'react'
import logo from './logo.svg'
import Counter from './Counter_class'
import { Button } from '@material-ui/core'
import './App.css'

const buttonSpacing = {
    marginBottom: "3rem"
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
            this.setState({
                showingCounter: !this.state.showingCounter
            })
        }
        
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
                    {this.state.showingCounter && <Counter />}
                </header>
            </div>
        )
    }
}

export default App