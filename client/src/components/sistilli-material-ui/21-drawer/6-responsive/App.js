import React, { useRef, useState, useLayoutEffect } from 'react'
import { Box, Hidden } from '@material-ui/core'

import { ResponsiveAppBar } from './ResponsiveAppBar'
import { MobileDrawer } from './MobileDrawer'
import { DesktopDrawer } from './DesktopDrawer'
import { navItems } from './NavItems'
import { DrawerList } from './DrawerList'
import { Content } from './Content'

export const App = (props) => {
    const defaultContainer = () => document.body
    const [container, setContainer] = useState(defaultContainer)
    const containerRef = useRef(container)

    // Capture a reference to the <div/> that will parent
    // our drawer of nav items.
    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    // Track the state of the mobile drawer.
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)

    const handleMobileDrawerToggle = () => {
        setOpenMobileDrawer(!openMobileDrawer)
    }

    // Track dimensions of desktop drawer.
    const [drawerDimensions, setDrawerDimensions] = useState({
        width: 0,
        height: 0
    })

    const appBarText = 'Responsive Drawer (Bonus)'
    const drawerAnchor = 'right'

    // Define the responsive boundary between mobile & desktop.
    const desktopVisibleBp = { smUp: true } // hides mobile stuff
    const mobileVisibleBp = { xsDown: true } // hides desktop stuff
    const implementation = { implementation: 'css' }
    const desktopVisibleProps = { ...desktopVisibleBp, ...implementation }
    const mobileVisibleProps = { ...mobileVisibleBp, ...implementation }

    const drawerList = (
        <DrawerList
            drawerItems={navItems}
            setDimensions={setDrawerDimensions}
        />
    )
    const mobileDrawerList = (
        <Hidden {...desktopVisibleProps}>{drawerList}</Hidden>
    )

    return (
        <>
            <ResponsiveAppBar
                text={appBarText}
                onMenuClick={handleMobileDrawerToggle}
                menuSide={drawerAnchor}
                hiddenMenuProps={desktopVisibleProps}
                style={{ position: 'relative' }}
            />
            <Box
                ref={containerRef}
                position="relative"
                maxHeight="40%"
                component="div"
                overflow="hidden auto"
                border="1px solid grey"
                paddingLeft="16px"
            >
                <Hidden {...desktopVisibleProps}>
                    <MobileDrawer
                        container={container}
                        anchor={drawerAnchor}
                        drawerContent={mobileDrawerList}
                        open={openMobileDrawer}
                        onClose={handleMobileDrawerToggle}
                        onClick={handleMobileDrawerToggle}
                    />
                    <Content />
                </Hidden>
                <Hidden {...mobileVisibleProps}>
                    <DesktopDrawer
                        anchor={drawerAnchor}
                        drawerContent={drawerList}
                    />
                    <Content
                        // Since drawer is always visible, avoid content occlusion.
                        drawerAnchor={drawerAnchor}
                        drawerDimensions={drawerDimensions}
                    />
                </Hidden>
            </Box>
        </>
    )
}

export default App
