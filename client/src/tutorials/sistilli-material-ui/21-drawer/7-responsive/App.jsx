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
    const appBarText = 'Resize me for demo'

    // Breakpoint between 'mobile' and 'desktop'
    //
    // This browser width (or wider) is desktop.
    // See material-ui theme.breakpoints.keys.

    const bpUp = 'sm' // xs | sm | md | lg | xl

    // Use ref to a containing div to position drawer.

    const drawerAnchor = 'right' // left | right | top | bottom
    const defaultContainer = () => document.body
    const [container, setContainer] = useState(defaultContainer)
    const containerRef = useRef(container)
    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    // Responsively detect when browser crosses threshold
    // between mobile and desktop (especially on resize).
    //
    // FIX: Stringify is pure expedience, otherwise hook returns
    //      referentially unstable result. Why?

    const isDesktop = JSON.stringify(useIsDesktop(bpUp)).includes('true')
    const isMobile = !isDesktop

    // Remember open/closed state of mobile drawer.

    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
    const handleMobileDrawerToggle = () => {
        setOpenMobileDrawer(!openMobileDrawer)
    }

    // Track dimensions of drawer for margin hints,
    // otherwsie always-visible desktop drawer occludes main content.

    const [drawerDimensions, setDrawerDimensions] = useState({
        width: 0,
        height: 0
    })
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
