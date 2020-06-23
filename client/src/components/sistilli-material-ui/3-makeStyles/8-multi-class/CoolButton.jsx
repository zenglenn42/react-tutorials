import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

// I'm using a slightly more modern package classnames package, clsx.
// import classNames from 'classnames';
import classNames from 'clsx';

const useStyles = makeStyles(theme => ({
    buttonText: props => {
        return {
            color: props.cool ? "blue" : "white",
            [theme.breakpoints.up("sm")]: {
                color: "cyan"
            },
        }
    },
    buttonBackground: {
        backgroundColor: "red"
    }
}))

const CoolButton = (props) => {
    const classes = useStyles(props)
    return (
        <>
            <Button className={classNames(classes.buttonText, classes.buttonBackground)} fullWidth variant="outlined" >Cool Button (text color changes on small screens)</Button>

            Applying multiple style classes (classes.buttonText and classes.buttonBackground)
            <div style={{overflowX: "scroll"}}>
                <pre>
                classNames = {JSON.stringify(classNames(classes.buttonText, classes.buttonBackground), null, 1)} <br/>
                </pre>
            </div>
        </>
    )
}

export default CoolButton
