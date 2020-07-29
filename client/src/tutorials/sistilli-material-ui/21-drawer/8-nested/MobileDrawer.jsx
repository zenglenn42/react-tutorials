import React from 'react'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const MobileDrawer = (props) => {
    const {
        container,
        anchor,
        drawerContent,
        open,
        onClose,
        // onOpen,  // FEATURE: Add support for SwipeableDrawer
        ModalProps,
        PaperProps,
        BackdropProps,
        style
    } = props
    const paperStyle = PaperProps.style
    const propsStyle = style
    const reqdStyle = { position: 'absolute' }
    const _style = { ...paperStyle, ...propsStyle, ...reqdStyle }

    const anchorTransformMap = {
        left: {
            slideToward: 'right' // 'top' works too
        },
        top: {
            slideToward: 'down'
        },
        right: {
            slideToward: 'down' // work around animation jitter bug
        },
        bottom: {
            slideToward: 'right' // work around animation jitter bug
        }
    }

    return (
        <>
            <MuiDrawer
                variant="temporary"
                container={container}
                anchor={anchor}
                open={open}
                onClose={onClose}
                // onOpen={onClose} // FEATURE: Add support for SwipeableDrawer
                elevation={5}
                PaperProps={{ ...PaperProps, style: { ..._style } }}
                BackdropProps={{
                    ...BackdropProps,
                    style: { position: 'absolute' }
                }}
                ModalProps={{
                    ...ModalProps,
                    style: { position: 'absolute' }
                    // hideBackdrop: false,  // Debug modal backdrop bleeding into desktop.
                }}
                SlideProps={{
                    direction: anchorTransformMap[anchor].slideToward
                }}
            >
                {drawerContent}
            </MuiDrawer>
        </>
    )
}

export default MobileDrawer
