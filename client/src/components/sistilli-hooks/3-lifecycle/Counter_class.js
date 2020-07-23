/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('I have mounted!!')
    }

    componentDidUpdate() {
        console.log('I have updated!!')
    }

    componentWillUnmount() {
        console.log('I have unmounted!!')
    }

    render() {
        const handleIncrementClick = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }

        const buttonSpacing = {
            marginBottom: '3rem'
        }

        return (
            <div>
                <h2>The count is: {this.state.count}</h2>
                <Button
                    className={buttonSpacing}
                    onClick={handleIncrementClick}
                    variant="contained"
                >
                    Increment Count
                </Button>
            </div>
        )
    }
}
