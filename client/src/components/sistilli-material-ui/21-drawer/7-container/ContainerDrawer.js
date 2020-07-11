import React from 'react'
import {Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    drawerItems: {
        overflowY: "scroll",
        padding: theme.spacing(0, 0)
    }
}))

export const ContainerDrawer = (props) => {
    // eslint-disable-next-line no-unused-vars
    const {container, anchor, drawerWidth, drawerItems, open, onClose, onClick, onDrawerItemClick} = props
    const classes = useStyles()

    const anchorTransformMap = {
        "left": {
            slideToward: 'right', // 'top' works too
            // entering: {
            //     transform: "translateX(0%)",
            //     origin: "left top",
            // },
            // exiting: {
            //     transform: "translateX(-100%)",
            //     origin: "left top",
            // },
        },
        "top": {
            slideToward: 'bottom',
            // entering: {
            //     transform: "translateY(0%)",
            //     origin: "center top",
            // },
            // exiting: {
            //     transform: "translateY(-100%)",
            //     origin: "center top",
            // },
        },
        "right": {
            slideToward: 'bottom',  // work around bug

            // **BROKEN**
            // slideToward: 'left', // yields animation jitter
            // entering: {
            //     transform: "translateX(0%)",
            //     origin: "right top",
            // },
            // exiting: {
            //     transform: "translateX(100%)",
            //     origin: "right top",
            // },
        },
        "bottom": {
            slideToward: 'right',   // work around bug

            // **BROKEN**           // yields animation jitter
            // slideToward: 'top',
            // entering: {
            //     transform: "translateY(0%)",
            //     origin: "center bottom",
            // },
            // exiting: {
            //     transform: "translateY(100%)",
            //     origin: "center bottom",
            // },
        }
    }

    return (
        <>
            <Drawer
                variant="temporary" // Doesn't seem to be strictly necessary.
                container = {container}
                anchor = {anchor}
                open={open} 
                onClose={onClose}
                onClick={onClick}
                elevation={5}
                PaperProps={{style: {position: "absolute"}}}
                BackdropProps={{style: {position: "absolute"}}}
                ModalProps={{style: {position: "absolute"}}}
                SlideProps={{
                    direction: anchorTransformMap[anchor].slideToward

                    // KEEP FOR DEBUG
                    //
                    // onEntering: (node) => {
                    //     node.style.webkitTransform = anchorTransformMap[anchor].entering.transform;
                    //     node.style.transform = anchorTransformMap[anchor].entering.transform;
                    //     node.style.transformOrigin = anchorTransformMap[anchor].entering.origin;
                    //     node.style.transition = theme.transitions.create('transform', {easing: theme.transitions.easing.easeIn});
                    //     node.style.webkitTransition = theme.transitions.create('-webkit-transform', {easing: theme.transitions.easing.easeIn});
                    // },
                    // onExiting: (node) => {
                    //     node.style.webkitTransform = anchorTransformMap[anchor].exiting.transform;
                    //     node.style.transform = anchorTransformMap[anchor].exiting.transform;
                    //     node.style.transformOrigin = anchorTransformMap[anchor].exiting.origin;
                    //     node.style.transition = theme.transitions.create('transform', {easing: theme.transitions.easing.easeInOut});
                    //     node.style.webkitTransition = theme.transitions.create('-webkit-transform', {easing: theme.transitions.easeInOut});
                    // },

                }}

                // KEEP FOR DEBUG
                //
                // transitionDuration = {{
                //     // Tweak these in debug situations to slow transform animation. time in msec.
                //     appear: theme.transitions.duration.standard,
                //     enter: theme.transitions.duration.enteringScreen,
                //     exit: theme.transitions.duration.leavingScreen,
                // }}

            >
                <List className={classes.drawerItems} dense>
                    {drawerItems.map((item, index) => {
                        const {text, icon, divider} = item
                        return (divider) ? <Divider/> :
                        (
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