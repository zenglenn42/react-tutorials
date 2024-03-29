import React from 'react'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const MobileDrawer = (props) => {
    const { container, anchor, drawerContent, open, onClose, onClick } = props

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
                variant="temporary" // Doesn't seem to be strictly necessary.
                container={container}
                anchor={anchor}
                open={open}
                onClose={onClose}
                onClick={onClick}
                elevation={5}
                PaperProps={{ style: { position: 'absolute' } }}
                BackdropProps={{ style: { position: 'absolute' } }}
                ModalProps={{
                    style: { position: 'absolute' }
                    // hideBackdrop: true   // Debug modal backdrop bleeding into Desktop views.
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
