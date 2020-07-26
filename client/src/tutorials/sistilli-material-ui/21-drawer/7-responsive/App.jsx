import React, { useRef, useState, useLayoutEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { drawerData } from './DrawerData'
import { DrawerList } from './DrawerList'
import { ResponsiveAppBar } from './ResponsiveAppBar'
import { ResponsiveDrawer } from './ResponsiveDrawer'
import { ResponsiveFrame } from './ResponsiveFrame'
import Content from './Content'
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

    const useStyles = makeStyles({
        container: {
            position: 'relative',
            minHeight: '33vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid grey',
            backgroundColor: '#fbbc05',
            overflow: 'hidden auto',
            padding: '1em 1em'
        },
        content: {
            border: '1px solid red'
        }
    })
    const classes = useStyles()

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
                        content={drawerList}
                        mobileProps={{
                            container: container,
                            open: openMobileDrawer,
                            onClose: handleMobileDrawerToggle,
                            onClick: handleMobileDrawerToggle
                        }}
                    />
                    <ResponsiveFrame
                        isDesktop={isDesktop}
                        desktopProps={{
                            drawerAnchor: drawerAnchor,
                            drawerDimensions: drawerDimensions
                        }}
                    >
                        <Content className={classes.content} />
                    </ResponsiveFrame>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
