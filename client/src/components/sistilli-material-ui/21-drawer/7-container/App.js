import React, {useRef, useState, useLayoutEffect} from 'react'
import {Box} from '@material-ui/core'
import {Home, ContactMail, Person} from '@material-ui/icons'
import {AppBar} from './MyAppBar'
import {ContainerDrawer} from './ContainerDrawer'

export const App = (props) => {

    const initialValue = () => document.body
    const [container, setContainer] = useState(initialValue)
    const containerRef = useRef(container)

    useLayoutEffect(() => {
        setContainer(containerRef.current)
    }, [containerRef])

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer)
    }

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
    ]

    const appBarText = "Container-relative Drawer (Bonus)"

    return (
        <>
        <AppBar 
            text={appBarText}
            onMenuClick={handleDrawerToggle}
            style={{position: "relative"}}
        />
        <Box
            ref={containerRef}
            position="relative"
            height = "125px"
            component="div"
            overflow="hidden auto"
            border="1px solid grey"
            paddingLeft="16px"
        >
            <ContainerDrawer 
                container = {container}
                drawerItems = {navItems}
                open = {openDrawer}
                onClose = {handleDrawerToggle}
                onClick = {handleDrawerToggle}
                onDrawerItemClick = {handleDrawerToggle}
            />
            <p style={{position: "inherit"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
            </p>
        </Box>        
        </>
    )
}

export default App