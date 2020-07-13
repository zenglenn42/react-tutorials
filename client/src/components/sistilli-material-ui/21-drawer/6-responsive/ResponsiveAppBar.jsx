import React from 'react'
import {AppBar as MuiAppBar, makeStyles, Hidden} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	appBar: {
		position: 'static'
	},
	grow: {
		flex: 1
	}
}))

export const ResponsiveAppBar = (props) => {
	const classes = useStyles()
	const {onMenuClick, text, menuSide, hiddenMenuProps} = props
	const _menuSide = (menuSide === 'left' || menuSide === 'right') ? menuSide : 'left'
	const menuButton = 
		<IconButton 
			onClick={onMenuClick}
			color= 'inherit' 
			aria-label='open drawer' 
			edge='start' >
			<MenuIcon />
		</IconButton>

	return (
		<>
			<CssBaseline />
			<MuiAppBar className={classes.appBar}>
				<Toolbar>
					<Hidden {...hiddenMenuProps}>
						{(_menuSide === 'left') && menuButton}
					</Hidden>
					<Typography variant='h6' noWrap>
						{text}
					</Typography>
					<div className = {classes.grow}/>
					<Hidden {...hiddenMenuProps}>
						{(_menuSide !== 'left') && menuButton}
					</Hidden>
				</Toolbar>
			</MuiAppBar>
		</>
	)
}
