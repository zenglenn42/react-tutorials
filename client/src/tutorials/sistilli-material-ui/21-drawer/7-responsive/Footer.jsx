import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1, 2),
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[500]
                : theme.palette.grey[800]
    }
}))

export const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Typography variant="body2">
                {/* Acme Footer &copy; {new Date().getFullYear()} */}
            </Typography>
        </footer>
    )
}

export default Footer
