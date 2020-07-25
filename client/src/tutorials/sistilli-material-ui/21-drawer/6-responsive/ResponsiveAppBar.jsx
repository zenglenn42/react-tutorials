import React from 'react'
import { AppBar as MuiAppBar, makeStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'static'
    },
    grow: {
        flex: 1
    }
}))

export const ResponsiveAppBar = (props) => {
    const classes = useStyles()
    const { text, onMenuClick, menuSide, isMobile } = props
    const _menuSide =
        menuSide === 'left' || menuSide === 'right' ? menuSide : 'left'
    const menuButton = (
        <IconButton
            onClick={onMenuClick}
            color="inherit"
            aria-label="open drawer"
            edge="start"
        >
            <MenuIcon />
        </IconButton>
    )

    return (
        <>
            <CssBaseline />
            <MuiAppBar className={classes.appBar}>
                <Toolbar>
                    {isMobile && _menuSide === 'left' && menuButton}
                    <Typography variant="h6" noWrap>
                        {text}
                    </Typography>
                    <div className={classes.grow} />
                    {isMobile && _menuSide === 'right' && menuButton}
                </Toolbar>
            </MuiAppBar>
        </>
    )
}
