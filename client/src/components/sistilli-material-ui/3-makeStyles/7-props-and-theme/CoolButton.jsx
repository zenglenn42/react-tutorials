import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    buttonStyle: (props) => {
        return {
            color: props.cool ? 'blue' : 'red',
            [theme.breakpoints.up('sm')]: {
                color: 'cyan'
            },
            backgroundColor: props.cool ? 'orange' : 'yellow'
        }
    }
}))

const CoolButton = (props) => {
    const classes = useStyles(props)
    return (
        <>
            <Button
                className={classes.buttonStyle}
                fullWidth
                variant="outlined"
            >
                Cool Button (text color changes on small screens)
            </Button>
            Props and theme affect multiple attributes
            <div style={{ overflowX: 'scroll' }}>
                <pre>
                    props = {JSON.stringify(props, null, 1)} <br />
                </pre>
            </div>
        </>
    )
}

export default CoolButton
