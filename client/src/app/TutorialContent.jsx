import React from 'react'
import { Typography, IconButton, Tooltip, Toolbar } from '@material-ui/core'

const TutorialContent = ({ classes, mainContent }) => {
    return (
        <div className={classes.scrollableListX}>
            <Toolbar className={classes.Demobar} variant="dense">
                <Typography variant="h6" noWrap>
                    {mainContent.primaryText}&nbsp;{mainContent.secondaryText}
                </Typography>
                <div className={classes.grow} />
                <Tooltip title={mainContent.refLink.tipText} enterDelay={300}>
                    <IconButton
                        component="a"
                        color="inherit"
                        href={mainContent.refLink.href}
                        aria-label={mainContent.refLink.tipText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {mainContent.refLink.icon}
                    </IconButton>
                </Tooltip>
                <Tooltip title={mainContent.codeLink.tipText} enterDelay={300}>
                    <IconButton
                        component="a"
                        color="inherit"
                        href={mainContent.codeLink.href}
                        aria-label={mainContent.codeLink.tipText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {mainContent.codeLink.icon}
                    </IconButton>
                </Tooltip>
            </Toolbar>
            {mainContent.demoComponent}
        </div>
    )
}

export default TutorialContent
