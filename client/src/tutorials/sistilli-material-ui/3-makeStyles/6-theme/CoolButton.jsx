import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        color: 'red',
        [theme.breakpoints.up('sm')]: {
            color: 'blue'
        }
    }
}))

const CoolButton = () => {
    const classes = useStyles()
    return (
        <>
            <Button
                className={classes.buttonStyle}
                fullWidth
                variant="outlined"
            >
                Cool Button (i change color on small screens)
            </Button>
        </>
    )
}

export default CoolButton
