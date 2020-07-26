import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    all: {},
    desktop: (marginHints) => {
        // Content should flow around always-visible drawer.
        return {
            marginTop:
                marginHints.drawerAnchor === 'top'
                    ? marginHints.drawerDimensions.height + theme.spacing(0)
                    : 0,
            marginRight:
                marginHints.drawerAnchor === 'right'
                    ? marginHints.drawerDimensions.width + theme.spacing(0)
                    : 0,
            marginBottom:
                marginHints.drawerAnchor === 'bottom'
                    ? marginHints.drawerDimensions.height + theme.spacing(0)
                    : 0,
            marginLeft:
                marginHints.drawerAnchor === 'left'
                    ? marginHints.drawerDimensions.width + theme.spacing(0)
                    : 0
        }
    }
}))

export const ResponsiveFrame = (props) => {
    const { isDesktop, desktopProps, children } = props
    const classes = useStyles(desktopProps)
    return (
        <div className={clsx(classes.all, { [classes.desktop]: isDesktop })}>
            {children}
        </div>
    )
}

export default ResponsiveFrame
