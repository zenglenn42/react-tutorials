import React from 'react'
import MobileDrawer from './MobileDrawer'
import DesktopDrawer from './DesktopDrawer'

export const ResponsiveDrawer = (props) => {
    const { anchor, content, isMobile, mobileProps } = props

    return (
        <>
            {isMobile ? (
                <MobileDrawer
                    container={mobileProps.container}
                    anchor={anchor}
                    drawerContent={content}
                    open={mobileProps.open}
                    onClose={mobileProps.onClose}
                    onClick={mobileProps.onClick}
                />
            ) : (
                <DesktopDrawer anchor={anchor} drawerContent={content} />
            )}
        </>
    )
}

export default ResponsiveDrawer
