import React from 'react'
import { AppBar, Toolbar, Typography,  makeStyles } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: "2em"
    },
    typographyStyles: {
        flex: "1"
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbarStyle}>
                <Typography className={classes.typographyStyles}>
                    Anthony Sistelli
                </Typography>
                <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
