import React from 'react'
import {Drawer, useTheme, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'

export const ContainerDrawer = (props) => {
    const {container, drawerItems, open, onClose, onClick, onDrawerItemClick} = props
    const theme = useTheme()

    return (
        <>
            <Drawer
                variant="temporary" // Doesn't seem to be strictly necessary.
                container = {container}
                open={open} 
                onClose={onClose}
                onClick={onClick}
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
                    {drawerItems.map((item, index) => {
                        const {text, icon} = item
                        return (
                            <ListItem button key={text} onClick={onDrawerItemClick}>
                                <ListItemIcon >{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </>
    )
}

export default ContainerDrawer