import React from 'react'
import MobileDrawer from './MobileDrawer'
import DesktopDrawer from './DesktopDrawer'
import { drawerData } from './DrawerData'
import { DrawerList } from './DrawerList'

export const ResponsiveDrawer = (props) => {
    const { anchor, isMobile, setDimensions, mobileProps } = props
    const drawerList = (
        <DrawerList drawerItems={drawerData} setDimensions={setDimensions} />
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
