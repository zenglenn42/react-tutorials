import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
    paper: {
        '& .MuiDrawer-paper': {
            width: ({ width }) => (width ? `${width}` : 'none'),
            position: 'absolute' // req'd for container-relative positioning
        }
    }
})

export const DesktopDrawer = (props) => {
    const {
        anchor,
        className,
        drawerList = [],
        PaperProps = {},
        SlideProps = {},
        width = ''
    } = props
    const classes = useStyles({ width })

    return (
        <Drawer
            variant="permanent"
            anchor={anchor}
            className={clsx(classes.paper, className)}
            open={true} // Drawer is always visible on 'Desktop'.
            // FEATURE: Add support for persistent variant
            //          with sensitivity to open and onClose.
            PaperProps={PaperProps}
            SlideProps={SlideProps}
        >
            {drawerList}
        </Drawer>
    )
}

export default DesktopDrawer
