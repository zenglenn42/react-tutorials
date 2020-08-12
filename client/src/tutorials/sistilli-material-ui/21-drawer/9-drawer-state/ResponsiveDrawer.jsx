import React from 'react'
import MobileDrawer from './MobileDrawer'
import DesktopDrawer from './DesktopDrawer'
import { DrawerList } from './DrawerList'

// For now, all styling is prop based.  Add more patternful
// class-based approach once I understand the idioms better.
// const useStyles = makeStyles({
//     /* Styles applied to the root element. */
//     root: {},
// })

export const ResponsiveDrawer = (props) => {
    const { CommonProps, DesktopProps, MobileProps } = props
    const { data, isMobile, onClose, setDimensions } = CommonProps

    const drawerList = (
        <DrawerList
            pages={data}
            // Provide a callback for locking in the actual layout dimensions of
            // the drawer as seen by the DOM.  This prevents content occlusion on
            // desktop views (where the drawer is always visible).
            setDimensions={setDimensions}
            // On mobile, close the modal drawer after a route or external link
            // is clicked.  (The router handles getting you to the href.)
            onLeafItemClick={onClose}
        />
    )

    return (
        <>
            {isMobile ? (
                <MobileDrawer
                    {...CommonProps}
                    MobileProps={MobileProps}
                    drawerList={drawerList}
                />
            ) : (
                <DesktopDrawer
                    {...CommonProps}
                    {...DesktopProps}
                    drawerList={drawerList}
                />
            )}
        </>
    )
}

export default ResponsiveDrawer
