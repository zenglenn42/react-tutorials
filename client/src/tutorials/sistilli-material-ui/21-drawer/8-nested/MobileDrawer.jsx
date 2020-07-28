import React from 'react'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const MobileDrawer = (props) => {
    const {
        container,
        anchor,
        drawerContent,
        open,
        onClose,
        onClick,
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
            slideToward: 'bottom'
        },
        right: {
            slideToward: 'bottom' // work around animation jitter bug
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
                PaperProps={{ ...PaperProps, style: { ..._style } }}
                BackdropProps={{
                    ...BackdropProps,
                    style: { position: 'absolute' }
                }}
                ModalProps={{
                    style: { position: 'absolute' },
                    // Disabling backdrop for now because it bleeds into my desktop render :-/
                    // TODO: make backdrop sensitive to breakpoints.
                    hideBackdrop: true,
                    ...ModalProps
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
