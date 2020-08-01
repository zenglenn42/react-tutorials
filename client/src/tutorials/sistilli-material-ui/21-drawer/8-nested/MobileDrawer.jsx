import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
    paper: {
        '& .MuiDrawer-paper': {
            width: ({ width }) => (width ? `${width}` : 'none'),
            // Required for container-relative positioning.
            position: 'absolute'
        }
    }
})

// FIX: I notice some slide-exit-transform 'jitter' when anchored on right
//      or bottom of containing element.  Override with directions that work
//      for now.

const anchorTransformMap = {
    left: {
        slideToward: 'right'
    },
    top: {
        slideToward: 'down'
    },
    right: {
        slideToward: 'down' // work around jitter
    },
    bottom: {
        slideToward: 'right' // work around jitter
    }
}

export const MobileDrawer = (props) => {
    const {
        anchor = 'left',
        className,
        drawerList = [],
        MobileProps = {},
        onClose,
        open,
        PaperProps = {},
        SlideProps = {},
        width = ''
        // onOpen,  // FEATURE: Add support for SwipeableDrawer
    } = props

    const {
        BackdropProps = {},
        container = document.body,
        elevation,
        ModalProps = {},
        PaperProps: MobilePaperProps = {}
    } = MobileProps

    const classes = useStyles({ width })

    return (
        <>
            <Drawer
                variant="temporary"
                anchor={anchor}
                BackdropProps={{
                    ...BackdropProps,
                    // Required for container-relative positioning.
                    style: { position: 'absolute' }
                }}
                className={clsx(classes.paper, className)}
                container={container}
                elevation={elevation}
                ModalProps={{
                    ...ModalProps,
                    // Required for container-relative positioning.
                    style: { position: 'absolute' },
                    keepMounted: true // Required for scroll persistence.
                }}
                onClose={onClose}
                // onOpen={onClose} // FEATURE: Add support for SwipeableDrawer
                open={open}
                PaperProps={{ ...PaperProps, ...MobilePaperProps }}
                SlideProps={{
                    ...SlideProps,
                    // Override transform directions to workaround
                    // animation exit-slide jitter.
                    direction: anchorTransformMap[anchor].slideToward
                }}
            >
                {drawerList}
            </Drawer>
        </>
    )
}

export default MobileDrawer
