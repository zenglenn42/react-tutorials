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
        // Prevent mobile drawer exit-transform from flying away
        // outside the bounds of the container.  Bad parent ref?
        overflow: 'hidden'
    },
    content: {
        // border: '1px solid red'  // debug
    }
}))

export const App = (props) => {
    const appBarText = "Click 'About' menu item for demo"
    const classes = useStyles()

    // Define the threshold between 'mobile' and 'desktop' browser widths.
    //
    // Anything at or above this width is considered 'desktop'.
    // See material-ui theme.breakpoints.keys.

    const bpUp = 'sm' // xs | sm | md | lg | xl

    // Position the nav drawer relative to a containing div.

    const defaultContainer = () => document.body
    const [container, setContainer] = useState(defaultContainer)
    const containerRef = useRef(container)
    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])
    const drawerAnchor = 'right' // left | right | top | bottom

    // Detect when the size of browser window crosses the threshold
    // between 'mobile' and 'desktop' (especially on resize).

    const isDesktop = useIsDesktop(bpUp)
    const isMobile = !isDesktop

    // Remember the open/closed state of the drawer (especially on mobile)

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawerClose = () => {
        setOpenDrawer(false)
    }
    const handleDrawerToggle = () => {
        setOpenDrawer((prevState) => {
            return !prevState
        })
    }
    // FEATURE: Add support for SwipeableDrawer
    // const handleDrawerOpen = () => {
    //     setOpenDrawer(true)
    // }

    // Track dynamic dimensions of the nav drawer to communicate
    // margin hints to main content window on desktop so always-visible
    // drawer does not occlude content.

    const [drawerDimensions, setDrawerDimensions] = useState({
        width: 0,
        height: 0
    })

    // Normally drawerWidth is computed dynamically according to
    // content of drawer.  However you may override that here
    // with a static width.

    const drawerWidth = 170
    const drawerWidthUnits = 'px'

    const drawerStaticWidth =
        typeof drawerWidth === 'number'
            ? `${drawerWidth}${drawerWidthUnits}`
            : ''

    return (
        <>
            <BrowserRouter>
                <ResponsiveAppBar
                    isMobile={isMobile}
                    text={appBarText}
                    onMenuClick={handleDrawerToggle}
                    menuSide={drawerAnchor}
                    style={{ position: 'relative' }}
                />
                <div ref={containerRef} className={classes.container}>
                    <ResponsiveDrawer
                        CommonProps={{
                            anchor: drawerAnchor,
                            data: pages,
                            isMobile: isMobile,
                            onClose: handleDrawerClose,
                            // PaperProps: { style: { backgroundColor: 'green' } },
                            setDimensions: setDrawerDimensions,
                            SlideProps: {},
                            width: drawerStaticWidth
                        }}
                        DesktopProps={
                            {
                                // PaperProps: { style: { backgroundColor: 'red' }}
                            }
                        }
                        MobileProps={{
                            container: container,
                            // elevation: {16},
                            BackdropProps: {},
                            ModalProps: {},
                            open: openDrawer
                            // FEATURE: Add support for SwipeableDrawer
                            // onOpen: handleDrawerOpen

                            // PaperProps: { style: { backgroundColor: 'blue' } }
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
