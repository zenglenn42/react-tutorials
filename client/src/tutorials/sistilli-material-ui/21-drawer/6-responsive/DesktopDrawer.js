import React from 'react'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const DesktopDrawer = (props) => {
    const { anchor, drawerContent } = props
    return (
        <MuiDrawer
            variant="permanent"
            anchor={anchor}
            open={true} // this really is the essence of a perm drawer anyway
            elevation={2}
            PaperProps={{ style: { position: 'absolute' } }}
        >
            {drawerContent}
        </MuiDrawer>
    )
}

export default DesktopDrawer
