import React from 'react'
import { AppBar, Toolbar, Typography,  makeStyles } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: "1"
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
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
