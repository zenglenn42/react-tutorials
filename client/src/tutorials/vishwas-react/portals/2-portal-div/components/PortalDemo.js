import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core'

// We need to style the portal div, otherwise it will land below the
// tutorial footer which is logically correct, but makes for an unpleasant
// visual experience.

const useStyle = makeStyles((theme) => ({
    style: {
        position: 'relative',
        bottom: '57vh',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.primary.main
    }
}))

function PortalDemo() {
    const classes = useStyle()

    return ReactDOM.createPortal(
        <h1 className={classes.style}>Portals demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
