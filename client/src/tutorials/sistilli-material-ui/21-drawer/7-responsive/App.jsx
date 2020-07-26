import React, { useRef, useState, useLayoutEffect } from 'react'
import { Box } from '@material-ui/core'
import { ResponsiveAppBar } from './ResponsiveAppBar'
import { MobileDrawer } from './MobileDrawer'
import { DesktopDrawer } from './DesktopDrawer'
import { drawerData } from './DrawerData'
import { DrawerList } from './DrawerList'
import { ResponsiveFrame } from './ResponsiveFrame'
import { Content } from './Content'
import useIsDesktop from './useIsDesktop'

export const App = (props) => {
    const defaultContainer = () => document.body
    const [container, setContainer] = useState(defaultContainer)
    const containerRef = useRef(container)

    // Capture a reference to the <div/> that will parent
    // our drawer of nav items.
    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    // Use a custom hook to detect when we're in 'desktop' versus
    // 'mobile' browser window width.
    //
    // (Stringify mess is pure expedience, otherwise useIsDesktop hook
    // doesn't destructure nicely.  Returns null. Feels esoteric.)
    const isDesktop = JSON.stringify(useIsDesktop('sm')).includes('true')
    const isMobile = !isDesktop

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

    const drawerList = (
        <DrawerList
            drawerItems={drawerData}
            setDimensions={setDrawerDimensions}
        />
    )

    return (
        <>
            <ResponsiveAppBar
                text={appBarText}
                onMenuClick={handleMobileDrawerToggle}
                menuSide={drawerAnchor}
                isMobile={isMobile}
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
                {isMobile ? (
                    <MobileDrawer
                        container={container}
                        anchor={drawerAnchor}
                        drawerContent={drawerList}
                        open={openMobileDrawer}
                        onClose={handleMobileDrawerToggle}
                        onClick={handleMobileDrawerToggle}
                    />
                ) : (
                    <DesktopDrawer
                        anchor={drawerAnchor}
                        drawerContent={drawerList}
                    />
                )}
                <ResponsiveFrame
                    isDesktop={isDesktop}
                    marginHints={{
                        drawerAnchor: drawerAnchor,
                        drawerDimensions: drawerDimensions
                    }}
                >
                    <Content />
                </ResponsiveFrame>
            </Box>
        </>
    )
}

export default App
