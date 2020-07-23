import React from 'react'

class LoginState extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const inoutStr = this.state.isLoggedIn ? 'in' : 'out'
        return <p>You are currently logged {inoutStr}</p>
    }
}

export default LoginState
