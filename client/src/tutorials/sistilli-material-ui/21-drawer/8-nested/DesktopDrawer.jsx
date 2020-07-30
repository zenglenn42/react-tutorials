import React from 'react'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const DesktopDrawer = (props) => {
    const { anchor, drawerContent, PaperProps, style } = props
    const paperStyle = PaperProps.style
    const propsStyle = style
    const reqdStyle = { position: 'absolute' }
    const _style = { ...paperStyle, ...propsStyle, ...reqdStyle }

    return (
        <MuiDrawer
            variant="permanent"
            anchor={anchor}
            open={true} // Drawer is always visible on 'Desktop'.
            // FEATURE: Add support for persistent variant
            //          with sensitivity to open and onClose.
            PaperProps={{ ...PaperProps, style: { ..._style } }}
        >
            {drawerContent}
        </MuiDrawer>
    )
}

export default DesktopDrawer