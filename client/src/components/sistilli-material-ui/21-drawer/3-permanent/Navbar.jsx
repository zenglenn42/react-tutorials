import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    link: {
        display: "inline",
        marginRight: theme.spacing(2),
        marginLeft: 0
    },
    list: {
        paddingLeft: 0,
        display: "inline"
    },
    paperRoutes: {
        backgroundColor: "lightgray",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))

export const Navbar = () => {
    const classes = useStyles()

    return (
        <>
            <nav>
                <Paper className={classes.paperRoutes} elevation={0} square >
                    Routes: &nbsp;
                    <ul className={classes.list}>
                        <li className={classes.link}>
                            <Link to="/">/home</Link>
                        </li>
                        <li className={classes.link}>
                            <Link to="/contact">/contact</Link>
                        </li>
                        <li className={classes.link}>
                            <Link to="/about">/about</Link>
                        </li>
                    </ul>
                </Paper>
            </nav>
        </>
    )
}