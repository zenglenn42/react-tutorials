import React from 'react'
import {AppBar, makeStyles} from '@material-ui/core'
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

export const MyAppBar = (props) => {
	const classes = useStyles()

	const {handleMenuClick, text} = props
	return (
		<>
			<CssBaseline />
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleMenuClick}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						{text}
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}

