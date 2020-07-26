import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    mobile: {
        marginRight: theme.spacing(1.5)
    },
    desktop: (props) => {
        const { marginHints } = props
        return {
            marginTop:
                marginHints.drawerAnchor === 'top'
                    ? marginHints.drawerDimensions.height + theme.spacing(1)
                    : 0,
            marginRight:
                marginHints.drawerAnchor === 'right'
                    ? marginHints.drawerDimensions.width + theme.spacing(1.5)
                    : theme.spacing(1.5),
            marginBottom:
                marginHints.drawerAnchor === 'bottom'
                    ? marginHints.drawerDimensions.height + theme.spacing(1)
                    : 0,
            marginLeft:
                marginHints.drawerAnchor === 'left'
                    ? marginHints.drawerDimensions.width + theme.spacing(1)
                    : 0
        }
    }
}))

export const ResponsiveFrame = (props) => {
    const { isDesktop, children } = props
    const classes = useStyles(props)
    return (
        <div className={clsx(classes.mobile, { [classes.desktop]: isDesktop })}>
            {children}
        </div>
    )
}

export default ResponsiveFrame
