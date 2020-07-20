import React from 'react'

class CountState extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const numStyle = {
            textAlign: 'center',
            fontSize: '400%',
            fontStyle: 'bold',
            margin: '0.5em 0',
        }

        const buttonStyle = {
            display: 'block',
            margin: '0 auto',
            fontSize: '125%',
            borderRadius: '0.10em',
        }

        return (
            <div>
                <p style={numStyle}>{this.state.count}</p>
                <button onClick={this.handleClick} style={buttonStyle}>
                    Change!
                </button>
            </div>
        )
    }
}

export default CountState
