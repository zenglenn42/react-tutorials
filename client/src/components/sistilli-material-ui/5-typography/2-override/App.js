import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    gutterBottom: {
        marginBottom: '0.6em'
    }
})

export const App = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography gutterBottom className={classes.gutterBottom}>
                Overriding gutterBottom with makeStyles.
            </Typography>
            <Typography
                gutterBottom
                classes={{
                    gutterBottom: classes.gutterBottom
                }}
            >
                Overriding gutterBottom with MUI css class.
            </Typography>
        </div>
    )
}
