import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    buttonStyle: {
        color: (props) => (props.cool ? 'blue' : 'red'),
    },
})

const CoolButton = (props) => {
    const classes = useStyles(props)
    return (
        <>
            <Button className={classes.buttonStyle} variant="outlined">
                Cool Button
            </Button>
            <hr />
            Prop affects a single attribute (text color).
            <div style={{ overflowX: 'scroll' }}>
                <pre>
                    props = {JSON.stringify(props, null, 1)} <br />
                </pre>
            </div>
        </>
    )
}

export default CoolButton
