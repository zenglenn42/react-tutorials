import React from 'react'
import { AppBar as MuiAppBar, makeStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'static',
    },
    grow: {
        flex: 1,
    },
}))

export const AppBar = (props) => {
    const classes = useStyles()
    const { onMenuClick, text, menuIconSide } = props
    const menuSide =
        menuIconSide === 'left' || menuIconSide === 'right'
            ? menuIconSide
            : 'left'
    const menuButton = (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
        >
            <MenuIcon />
        </IconButton>
    )

    return (
        <>
            <CssBaseline />
            <MuiAppBar className={classes.appBar}>
                <Toolbar>
                    {menuSide === 'left' && menuButton}
                    <Typography variant="h6" noWrap>
                        {text}
                    </Typography>
                    {menuSide !== 'left' && (
                        <>
                            <div className={classes.grow} />
                            {menuButton}
                        </>
                    )}
                </Toolbar>
            </MuiAppBar>
        </>
    )
}
