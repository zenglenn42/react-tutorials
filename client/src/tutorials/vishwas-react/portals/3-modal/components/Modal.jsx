import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    modalStyle: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    contentStyle: {
        postiion: 'relative',
        display: 'inline-block',
        justifySelf: 'center',
        background: 'white',
        padding: '2rem'
    }
}))

const modalRoot = document.getElementById('portal-root')

function Modal(props) {
    const classes = useStyle()

    return ReactDOM.createPortal(
        <div className={classes.modalStyle} onClick={props.onClose}>
            <div className={classes.contentStyle}>
                {props.children}
                <hr />
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal
