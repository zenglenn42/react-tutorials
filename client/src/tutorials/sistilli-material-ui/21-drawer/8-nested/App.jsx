import React, { useRef, useState, useLayoutEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { ResponsiveAppBar } from './ResponsiveAppBar'
import { ResponsiveDrawer } from './ResponsiveDrawer'
import { ResponsiveContent } from './ResponsiveContent'
import { Content } from './Content'
import { drawerData as pages } from './DrawerData'
import { Footer } from './Footer'
import { useIsDesktop } from './useIsDesktop'

export const App = (props) => {
    const appBarText = "Click 'About' menu item for demo"

    // Define the threshold between 'mobile' and 'desktop' browser widths.
    //
    // Anything at or above this width is considered 'desktop'.
    // See material-ui theme.breakpoints.keys.

    const bpUp = 'sm' // xs | sm | md | lg | xl

    // Position the nav drawer relative to a containing div.

    const drawerAnchor = 'right' // left | right | top | bottom
    const defaultContainer = () => document.body
    const [container, setContainer] = useState(defaultContainer)
    const containerRef = useRef(container)
    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    // Detect when the size of browser window crosses the threshold
    // between 'mobile' and 'desktop' (especially on resize).
    //
    // FIX: Stringify is pure expedience, otherwise hook returns
    //      referentially unstable result. Why? :-/

    const isDesktop = JSON.stringify(useIsDesktop(bpUp)).includes('true')
    const isMobile = !isDesktop

    // Remember the open/closed state of the mobile drawer.

    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
    const handleMobileDrawerToggle = () => {
        setOpenMobileDrawer(!openMobileDrawer)
    }

    // Track dimensions of the nav drawer for margin hints,
    // especially when rendering on desktops, otherwise the always-visible
    // desktop drawer occludes main content.

    const [drawerDimensions, setDrawerDimensions] = useState({
        width: 0,
        height: 0
    })

    const useStyles = makeStyles((theme) => ({
        container: {
            position: 'relative',
            minHeight: '33vh',
            maxHeight: '33vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid grey',
            backgroundColor: theme.palette.grey[100],
            padding: '0.5em 1em',
            // Prevent mobile drawer exit-transform from flying
            // away outside the bounds of the container.  Odd.
            overflow: 'hidden'
        },
        content: {
            // border: '1px solid red'
        }
    }))
    const classes = useStyles()
    const drawerWidth = 150

    return (
        <>
            <BrowserRouter>
                <ResponsiveAppBar
                    isMobile={isMobile}
                    text={appBarText}
                    onMenuClick={handleMobileDrawerToggle}
                    menuSide={drawerAnchor}
                    style={{ position: 'relative' }}
                />
                <div ref={containerRef} className={classes.container}>
                    <ResponsiveDrawer
                        isMobile={isMobile}
                        anchor={drawerAnchor}
                        data={pages}
                        setDimensions={setDrawerDimensions}
                        MobileProps={{
                            container: container,
                            open: openMobileDrawer,
                            onClose: handleMobileDrawerToggle,
                            onClick: handleMobileDrawerToggle
                        }}
                        PaperProps={{
                            style: { width: `${drawerWidth}px` }
                        }}
                    />
                    <ResponsiveContent
                        isDesktop={isDesktop}
                        desktopProps={{
                            drawerAnchor: drawerAnchor,
                            drawerDimensions: drawerDimensions
                        }}
                    >
                        <Content className={classes.content} />
                    </ResponsiveContent>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
