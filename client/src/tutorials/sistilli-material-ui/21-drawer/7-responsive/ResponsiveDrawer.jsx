import React from 'react'
import MobileDrawer from './MobileDrawer'
import DesktopDrawer from './DesktopDrawer'
import { DrawerList } from './DrawerList'

export const ResponsiveDrawer = (props) => {
    const { anchor, items, setDimensions, isMobile, mobileProps } = props
    const drawerList = (
        <DrawerList items={items} setDimensions={setDimensions} />
    )

    return (
        <>
            {isMobile ? (
                <MobileDrawer
                    container={mobileProps.container}
                    anchor={anchor}
                    drawerContent={drawerList}
                    open={mobileProps.open}
                    onClose={mobileProps.onClose}
                    onClick={mobileProps.onClick}
                />
            ) : (
                <DesktopDrawer anchor={anchor} drawerContent={drawerList} />
            )}
        </>
    )
}

export default ResponsiveDrawer
