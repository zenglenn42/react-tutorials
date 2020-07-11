import React from 'react'
import {AppBar as MuiAppBar, makeStyles} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme=>({
	appBar: {
		position: "static"
	}
}))

export const AppBar = (props) => {
	const classes = useStyles()

	const {onMenuClick, text} = props
	return (
		<>
			<CssBaseline />
			<MuiAppBar className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={onMenuClick}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						{text}
					</Typography>
				</Toolbar>
			</MuiAppBar>
		</>
	)
}