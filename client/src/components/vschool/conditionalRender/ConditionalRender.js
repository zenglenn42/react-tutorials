import React from 'react'

class ConditionalRender extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    setButtonText() {
        return this.state.isLoggedIn ? 'logout' : 'login'
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn,
            }
        })
    }

    render() {
        const buttonText = this.setButtonText()
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <p>You are logged in.</p>
                ) : (
                    <p>You are logged out.</p>
                )}
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

export default ConditionalRender
