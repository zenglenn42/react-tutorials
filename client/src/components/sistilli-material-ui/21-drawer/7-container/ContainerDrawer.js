import React, {useRef, useState, useLayoutEffect} from 'react'
import {Drawer, Box, useTheme, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import {MyAppBar} from './MyAppBar'
import {Home, ContactMail, Person} from '@material-ui/icons'

const ContainerDrawer = (props) => {
    const initialValue = () => document.body
    const [modalContainer, setModalContainer] = useState(initialValue)
    const containerRef = useRef(modalContainer)

    useLayoutEffect(() => {
        setModalContainer(containerRef.current)
    }, [containerRef])

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer)
    }

    const theme = useTheme()

    const itemsList = [
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

    return (
        <>
        <MyAppBar 
            text="Container-relative Drawer (Bonus)"
            handleMenuClick={handleDrawerToggle}
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
            <Drawer
                variant="temporary" // Doesn't seem to be strictly necessary.
                container = {modalContainer}
                open={openDrawer} 
                onClose={handleDrawerToggle}
                onClick={handleDrawerToggle}
                elevation={5}
                PaperProps={{style: {position: "absolute", width: "auto", height: "100%"}}}
                BackdropProps={{style: {position: "absolute"}}}
                ModalProps={{style: {position: "absolute"}}}
                SlideProps={{
                    onExiting: (node) => {
                        node.style.webkitTransform = "scaleX(0)";
                        node.style.transform = "scaleX(0)";
                        node.style.transformOrigin = "top left ";
                        // node.style.transition = theme.transitions.create('transform', {easing: theme.transitions.easing.easeInOut});
                        // node.style.webkitTransition = theme.transitions.create('-webkit-transform', {easing: theme.transitions.easing.easeInOut});
                    },
                }}
                transitionDuration = {{
                    appear: theme.transitions.duration.standard,
                    enter: theme.transitions.duration.standard,
                    exit: theme.transitions.duration.leavingScreen,
                }}
            >
                <List dense style={{padding: theme.spacing(0, 0)}}>
                    {itemsList.map((item, index) => {
                        const {text, icon} = item
                        return (
                            <ListItem button key={text} onClick={handleDrawerToggle}>
                                <ListItemIcon >{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <p style={{position: "inherit"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
            </p>
        </Box>        
        </>
    )
}

export default ContainerDrawer