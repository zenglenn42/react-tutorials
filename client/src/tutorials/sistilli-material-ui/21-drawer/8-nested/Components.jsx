import React from 'react'
import { withRouter } from 'react-router-dom'

const Components = (props) => {
    const { className, location: { pathname } = {} } = props

    return (
        <div className={className}>
            <h2 style={{ textAlign: 'center' }}>Components page</h2>
            <hr />
            <h3>location.pathname: {pathname}</h3>
        </div>
    )
}

export default withRouter(Components)
