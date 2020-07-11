import React, {useRef, useState, useLayoutEffect} from 'react'
import {Box, Divider} from '@material-ui/core'
import {Home, ContactMail, Person, Work, AcUnit, LocalDrink, DirectionsWalk} from '@material-ui/icons'
import {AppBar} from './MyAppBar'
import {ContainerDrawer} from './ContainerDrawer'

export const App = (props) => {
    const defaultContainer = () => document.body
    const [container, setContainer] = useState(defaultContainer)
    const containerRef = useRef(container)

    // Capture a reference to the <div/> that will parent
    // our slideout drawer of nav items.

    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    // Track the state of the drawer.

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer)
    }

    const appBarText = "Container-modal Drawer (Bonus)"
    const drawerWidth = "200px"
    const drawerAnchor = 'right'
    const navItems = [
        {
            text: 'Home',
            icon: <Home />,
            // onClick: () => history.push('/')
        },
        {
            text: 'Contact',
            icon: <ContactMail />,
            // onClick: () => history.push('/contact')
        },
        {
            text: 'About',
            icon: <Person />,
            // onClick: () => history.push('/about')
        },
        {
            text: 'Work',
            icon: <Work />,
            // onClick: () => history.push('/work')
        },
        {
            divider: <Divider />,
        },
        {
            text: 'Make snow',
            icon: <AcUnit />,
            // onClick: () => history.push('/makesnow')
        },
        {
            text: 'Drink',
            icon: <LocalDrink />,
            // onClick: () => history.push('/drink')
        },
        {
            text: 'Walk',
            icon: <DirectionsWalk />,
            // onClick: () => history.push('/walk')
        }
    ]

    return (
        <>
        <AppBar 
            text={appBarText}
            onMenuClick={handleDrawerToggle}
            style={{position: "relative"}}
            menuIconSide = {drawerAnchor}
        />
        <Box
            ref={containerRef}
            position="relative"
            maxHeight = "40%"
            component="div"
            overflow="hidden auto"
            border="1px solid grey"
            paddingLeft="16px"
        >
            <ContainerDrawer 
                container = {container}
                anchor = {drawerAnchor}
                drawerWidth = {drawerWidth}
                drawerItems = {navItems}
                open = {openDrawer}
                onClose = {handleDrawerToggle}
                onClick = {handleDrawerToggle}
                onDrawerItemClick = {handleDrawerToggle}
            />
            <p style={{position: "inherit"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
            </p>
        </Box>        
        </>
    )
}

export default App