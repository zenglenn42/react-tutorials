import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    buttonStyle: (props) => {
        return {
            color: props.cool ? 'blue' : 'red',
            backgroundColor: props.cool ? 'orange' : 'yellow',
        }
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
            <div style={{ overflowX: 'scroll' }}>
                Prop affects multiple attributes (text color and background
                color).
                <pre>
                    props = {JSON.stringify(props, null, 1)} <br />
                </pre>
            </div>
        </>
    )
}

export default CoolButton
