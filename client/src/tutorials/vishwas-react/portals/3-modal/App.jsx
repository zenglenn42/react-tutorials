import React, { useState } from 'react'
import Modal from './components/Modal'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    appStyle: {
        display: 'flex',
        justifySelf: 'center',
        alignItems: 'center'
    }
}))

export const App = () => {
    const [state, setStatel] = useState({ showModal: false })
    const handleShowModal = () => setStatel({ showModal: true })
    const handleHideModal = () => setStatel({ showModal: false })
    const classes = useStyles()

    return (
        <div className={classes.appStyle}>
            <div style={{ position: 'relative' }}>
                <h1>App with Modal</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat repudiandae aspernatur, facere dolores numquam ipsa
                    voluptas quidem eius inventore delectus ad quod quam
                    pariatur nihil ullam eligendi sint, eveniet deleniti!
                </p>
                <button onClick={handleShowModal}>Show Modal</button>
                <hr />
                <p>This example inspired by Ken C. Dodds</p>
                <p>
                    See his{' '}
                    <a
                        href="https://codesandbox.io/s/00254q4n6p"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        codesandbox
                    </a>
                </p>
                {state.showModal ? (
                    <Modal onClose={handleHideModal}>
                        This is a modal message.
                    </Modal>
                ) : null}
            </div>
        </div>
    )
}

export default App
